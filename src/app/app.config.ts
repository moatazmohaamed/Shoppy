import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withViewTransitions,
} from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    providePrimeNG({}),
    provideRouter(routes, withViewTransitions(), withHashLocation()),
    provideClientHydration(withEventReplay()),
  ],
};
