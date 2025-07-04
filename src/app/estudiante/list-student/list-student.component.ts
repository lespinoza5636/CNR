import { ChangeDetectionStrategy, Component, signal, OnInit, inject, linkedSignal, viewChild } from '@angular/core';

import { TableModule } from 'primeng/table';
import { Student } from '../data/interfaces/student';
import { StudentService } from '../data/services/student.service';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { DatePipe } from '@angular/common';
import { NativeDialogComponent } from '../../components/nativeDialog/nativeDialog.component';
import { FormStudentComponent } from '../components/form-student/form-student.component';

@Component({
  selector: 'app-list-student',
  imports: [TableModule, PaginatorComponent, FilterComponent, DatePipe, NativeDialogComponent, FormStudentComponent],
  template: `

  <div class="flex flex-col gap-3 w-full mb-5">
  <app-filter class="w-full" (filterOuput)="buscarDato($event)" (addOuput)="openDialog()"></app-filter>
  <div class="card w-full">
    <p-table [value]="studentPaginados()" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
            <tr>
              <th>ID</th>
              <th>Cédula</th>
                <th>Nombres</th>
                <th>Primer apellido</th>
                <th>Segundo apellido</th>
                <th>Código MINED</th>
                <th>Agregado</th>
                <th></th>
            </tr>
        </ng-template>
        <ng-template #body let-estudiante>
            <tr>
              <td>{{ estudiante.Id }}</td>
              <td>{{ estudiante.Numero_identidad }}</td>
                <td>{{ estudiante.Nombres }}</td>
                <td>{{ estudiante.Apellidos1 }}</td>
                <td>{{ estudiante.Apellido2 }}</td>
                <td>{{ estudiante.Codigo_MINED }}</td>
                <td>{{ estudiante.Fecha_Registro | date }} </td>
                <td>Editar</td>
            </tr>
        </ng-template>
    </p-table>
</div>
</div>
<app-paginator [paginas]="paginas()" [paginasPrevias]="paginasPrevias()" [paginasSiguientes]="paginasSiguientes()" (paginaActualOuput)="paginaActual.set($event)"></app-paginator>


<app-native-dialog [buttonGuardar]="true">
  <app-form-student></app-form-student>
</app-native-dialog>
  `,
  styleUrl: './list-student.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListStudentComponent implements OnInit{
  students = signal<Student[]>([]);
  studentFilter = linkedSignal(() => this.students());

  studentSvc = inject(StudentService);
  paginas = linkedSignal(() => Math.ceil(this.studentFilter().length / 20));
  paginaActual = signal(1);
  studentPaginados = linkedSignal(() => this.studentFilter().slice((this.paginaActual() - 1) * 20, this.paginaActual() * 20));
  paginasPrevias = linkedSignal(() => this.paginaActual() > 1);
  paginasSiguientes = linkedSignal(() => this.paginaActual() < this.paginas());

  dialog = viewChild.required(NativeDialogComponent);

  ngOnInit(): void {
    this.getStudent();
  }

  async getStudent(){
    const students = await this.studentSvc.getStudent();
    this.students.set(students.data);
  }

   buscarDato(filtro: string) {
      const palabras = filtro.toLowerCase().split(' ').filter(p => p.trim() !== '');
      this.paginaActual.set(1)
      this.studentFilter.set(this.students().filter((item) => {
        const campos = [
          item.Nombres?.toLowerCase() || '',
          item.Apellidos1?.toLowerCase() || '',
          item.Apellido2?.toLowerCase() || '',
          item.Numero_identidad?.toLowerCase() || ''
        ];
        // Verifica que cada palabra del filtro coincida con al menos un campo del nombre
        return palabras.every(palabra =>
        {
          return campos.some(campo => campo.includes(palabra))
        }
          
        );
      })
    );
  }

  openDialog(){
    this.dialog().open('Agregar estudiante');
  }
 }
