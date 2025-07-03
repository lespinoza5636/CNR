import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { tokenHttpInterceptor } from './security/interceptors/token-http-interceptor';
import { spinnerInterceptor } from './security/interceptors/spinner.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([
      spinnerInterceptor, tokenHttpInterceptor
    ])),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ]
};
