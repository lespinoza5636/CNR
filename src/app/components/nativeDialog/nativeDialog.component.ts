import { Component, ElementRef, HostListener, input, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-native-dialog',
  imports: [],
  template: `
  @if(isOpen()){
    <div class="fixed inset-0 bg-black opacity-50 z-40" (click)="close()"></div>
  }
  <dialog id="alert-dialog" #dialog class="my-10 bg-white rounded-lg shadow dark:bg-gray-700 relative w-full max-w-6xl max-h-4xl overflow-hidden z-[1050]">
    <!-- Modal header -->
     
    <div class="flex items-center justify-between p-4 md:py-3 px-5 border-b rounded-t dark:border-gray-600">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        {{title()}}
      </h3>
      <button type="button" (click)="close()" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close modal</span>
      </button>
  </div>
  <!-- Modal body -->
  <div class="py-6 px-8 space-y-4 min-h-[300px] max-h-[450px] 2xl:max-h-[600px] overflow-y-auto">
    <ng-content>

    </ng-content>
</div>
<div class="flex items-center justify-end p-2 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
  @if(buttonGuardar())
    {
  <button data-modal-hide="default-modal" type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Guardar</button>
}
  <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" (click)="close()">Cerrar</button>

</div>
  </dialog>
`,
  styleUrl: './nativeDialog.component.css',
})
export class NativeDialogComponent {
  title = signal<string>('');
  buttonGuardar = input.required<boolean>();
  id = input<number>();
  dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialog');
isOpen = signal<boolean>(false);
  //Evento
  emitterAceptar = output();
  emmiterCerrar = output();

  ngAfterViewInit(): void {
    this.dialogRef()!.nativeElement.addEventListener('click', (event) => {
      if (event.target === this.dialogRef()!.nativeElement) {
        this.close();
      }
    });
  }

  open(title: string) {
            this.title.set(title);
            this.dialogRef()!.nativeElement.show();  this.isOpen.set(true); // Mostrar fondo
    }

  close() {
    this.dialogRef()!.nativeElement.classList.add('closing');
    setTimeout(() => {
      this.dialogRef()!.nativeElement.classList.remove('closing');
      this.dialogRef()!.nativeElement.close();
          this.isOpen.set(false); // Ocultar fondo
          this.emmiterCerrar.emit();
    }, 300); // mismo tiempo que el transition (.3s)
  }
      aceptarButton(){
        this.emitterAceptar.emit();
      }

      @HostListener('document:keydown.escape', ['$event']) 
      onKeydownHandler(event: Event) {
        const keyboardEvent = event as KeyboardEvent;
              this.close();
            }
      
 }
