import { ChangeDetectionStrategy, Component, signal, OnInit, inject } from '@angular/core';

import { TableModule } from 'primeng/table';
import { Student } from '../data/interfaces/student';
import { StudentService } from '../data/services/student.service';

@Component({
  selector: 'app-list-student',
  imports: [TableModule],
  template: `
  <div class="card">
    <p-table [value]="students()" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template #body let-product>
            <tr>
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </ng-template>
    </p-table>
</div>
  `,
  styleUrl: './list-student.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListStudentComponent implements OnInit{
  students = signal<Student[]>([]);
  studentSvc = inject(StudentService);

  ngOnInit(): void {
    this.getStudent
  }

  async getStudent(){
    const students = await this.studentSvc.getStudent();
    this.students.set(students.data);
  }
 }
