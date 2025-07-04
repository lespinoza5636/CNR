import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [ReactiveFormsModule],
  template: `
  <form class="w-full" [formGroup]="filterForm" (submit)="buscarDato()">
  <div class="bg-white dark:bg-gray-900 w-full mb-5 p-6 rounded-lg relative shadow-md shadow-black">
        <div class="bg-[#CBAC7B] w-full h-1 absolute top-0 left-0"></div>

        <div class="flex items-center gap-2 ">
        <input formControlName="filter" type="text" name="filtro" id="filtro" placeholder="Filtrar por docente o asignatura" class="bg-gray-300 dark:bg-gray-800 dark:text-white border border-gray-500 dark:border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" (keydown.enter)="buscarDato()">
        <button class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" type="submit">Filtrar</button>
        <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" (click)="addStudent()">Agregar</button>
        </div>
        </div>
        </form>
  `,
  styleUrl: './filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filterOuput = output<string>();
  addOuput = output();
  fb = inject(FormBuilder);

  filterForm = this.fb.group({
    filter: new FormControl('')
  })

  buscarDato(){
    this.filterOuput.emit(this.filterForm.get('filter')?.value ?? '');
  }

  addStudent(){
    this.addOuput.emit();
  }
 }
