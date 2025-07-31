import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
export const SERVER_URL = new InjectionToken<string>('server url');

export const appConfig: ApplicationConfig = {
  providers: [
   {
     provide: SERVER_URL,
     useValue: 'https://localhost:5001/api/v1/',
   },
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
