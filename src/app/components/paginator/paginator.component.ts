import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  template: `
  <!-- Pagination -->
<nav class="flex items-center gap-x-1 justify-end" aria-label="Pagination">
    <button type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Previous" (click)="prevPage()">
      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
      <span class="sr-only">Previous</span>
    </button>
    <div class="flex items-center gap-x-1">
      <span class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:focus:bg-white/10">{{paginaActual()}}</span>
      <span class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">de</span>
      <span class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">{{paginas()}}</span>
    </div>
    <button type="button" (click)="nextPage()" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Next">
      <span class="sr-only">Next</span>
      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>
  </nav>
  `,
  styleUrl: './paginator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  paginaActual = signal(1);
  paginas = input<number>();
  paginasPrevias = input<boolean>();
  paginasSiguientes = input<boolean>();

  paginaActualOuput = output<number>();

  async nextPage() {
    if(this.paginasSiguientes() === true){
    this.paginaActual.set(this.paginaActual() + 1);
    this.paginaActualOuput.emit(this.paginaActual());
    }
  }

  async prevPage() {
    if(this.paginasPrevias() === true){
      this.paginaActual.set(this.paginaActual() - 1);
      this.paginaActualOuput.emit(this.paginaActual());
    }
  }
}
