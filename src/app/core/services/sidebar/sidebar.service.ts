import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private currentColorSource = new BehaviorSubject<string>('#03C9D7');
  currentColor$ = this.currentColorSource.asObservable();

  private screenSizeSource = new BehaviorSubject<number>(0);
  screenSize$ = this.screenSizeSource.asObservable();

  private themeService = inject(ThemeService);

  setActiveMenu(value: boolean) {
    this.themeService.activeMenu.next(value);
  }

  setCurrentColor(color: string) {
    this.currentColorSource.next(color);
  }

  setScreenSize(size: number) {
    this.screenSizeSource.next(size);
  }
}
