
import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { SpinnerService } from './spinner.service';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  
  const spinnerSvc = inject(SpinnerService);
  spinnerSvc.show();
  return next(req).pipe(finalize(() => spinnerSvc.hide()));
};
