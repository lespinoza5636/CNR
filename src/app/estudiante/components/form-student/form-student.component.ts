import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-student',
  imports: [ReactiveFormsModule],
  template: `
  <form [formGroup]="formEstudiante" class="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">

  <h2 class="text-lg font-bold text-gray-900 dark:text-white">Identificación</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <input type="text" formControlName="Nombres" placeholder="Nombres"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    
    <input type="text" formControlName="Apellidos1" placeholder="Primer Apellido"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    
    <input type="text" formControlName="Apellido2" placeholder="Segundo Apellido"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">

    <input type="text" formControlName="Numero_identidad" placeholder="Número de Identidad"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">

    <input type="date" formControlName="Fecha_nacimiento"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">

    <select formControlName="Id_sexo"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <option value="">Seleccione Sexo</option>
      <option value="1">Masculino</option>
      <option value="2">Femenino</option>
    </select>

    <select formControlName="Id_tipo_identidad" class="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <option value="">Tipo de Identidad</option>
    </select>

    <select formControlName="Id_tipo_sangre" class="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <option value="">Tipo de Sangre</option>
    </select>

    <select formControlName="Id_etnia" class="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <option value="">Etnia</option>
    </select>
  </div>

  <h2 class="text-lg font-bold text-gray-900 dark:text-white mt-6">Origen</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <select formControlName="Id_dimension_nacionalidad" class="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <option value="">Nacionalidad</option>
    </select>

    <select formControlName="Id_pais_origen" class="flowbite-select">
      <option value="">País de Origen</option>
    </select>

    <select formControlName="Id_estado_provincia" class="flowbite-select">
      <option value="">Estado / Provincia</option>
    </select>

    <select formControlName="Id_municipio_origen" class="flowbite-select">
      <option value="">Municipio</option>
    </select>

    <select formControlName="Id_comunidad_origen" class="flowbite-select">
      <option value="">Comunidad / Comarca</option>
    </select>

    <select formControlName="Id_zona_procedencia" class="flowbite-select">
      <option value="">Zona de Procedencia</option>
    </select>

    <input type="text" formControlName="Centro_Origen" placeholder="Centro de Origen (opcional)"
      class="flowbite-input">
  </div>

  <h2 class="text-lg font-bold text-gray-900 dark:text-white mt-6">Académico</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <select formControlName="Id_centro_secundaria" class="flowbite-select">
      <option value="">Centro de Secundaria</option>
    </select>

    <input type="number" formControlName="Anio_bachillerato" placeholder="Año Bachillerato" class="flowbite-input">

    <select formControlName="Id_carrera_tecnica" class="flowbite-select">
      <option value="">Carrera Técnica</option>
    </select>

    <select formControlName="Id_opcion_clasifico" class="flowbite-select">
      <option value="">Opción Clasificó</option>
    </select>

    <input type="number" formControlName="Nota_promedio_ingreso" placeholder="Nota Promedio" step="0.01" class="flowbite-input">
    <input type="number" formControlName="Nota_final_ingreso" placeholder="Nota Final" step="0.01" class="flowbite-input">
    <input type="number" formControlName="Anio_ingreso_carrera" placeholder="Año de Ingreso a la Carrera" class="flowbite-input">

    <select formControlName="Carrera_tecnica" class="flowbite-select">
      <option value="1">Sí desea carrera técnica</option>
      <option value="0">No desea</option>
    </select>
  </div>

  <h2 class="text-lg font-bold text-gray-900 dark:text-white mt-6">Códigos</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <input type="text" formControlName="Codigo_MINED" placeholder="Código MINED" class="flowbite-input">
    <input type="text" formControlName="Codigo_Persona" placeholder="Código Persona" class="flowbite-input">
  </div>

  <div class="flex justify-end mt-6 space-x-3">
    <button type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Guardar
    </button>
  </div>
</form>



  `,
  styleUrl: './form-student.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormStudentComponent {
  fb = inject(FormBuilder);

  formEstudiante = this.fb.group({
      Id: [0],
      Id_dimension_nacionalidad: [''],
      Id_pais_origen: [''],
      Id_estado_provincia: [''],
      Id_municipio_origen: [''],
      Id_comunidad_origen: [''],
      Id_sexo: [''],
      Id_etnia: [11],
      Id_tipo_sangre: [''],
      Id_tipo_identidad: [''],
      Id_zona_procedencia: [''],
      Id_centro_secundaria: [8251],
      Id_carrera_tecnica: [''],
      Id_opcion_clasifico: [''],
      Nombres: [''],
      Apellidos1: [''],
      Apellido2: [''],
      Codigo_MINED: ['-'],
      Codigo_Persona: ['-'],
      Anio_bachillerato: [0],
      Carrera_tecnica: [0],
      Numero_identidad: [''],
      Fecha_nacimiento: [''],
      Nota_promedio_ingreso: [0],
      Nota_final_ingreso: [0],
      Anio_ingreso_carrera: [0],
      Centro_Origen: [null]
    });

 }
