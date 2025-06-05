import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  currentColor = new BehaviorSubject<string>('#1E4DB7');
  currentMode = new BehaviorSubject<string>('Light');
  activeMenu = new BehaviorSubject<boolean>(true);
  themeSettings = new BehaviorSubject<boolean>(false);

  setColor(color: string) {
    this.currentColor.next(color);
    localStorage.setItem('colorMode', color);
  }

  setMode(mode: string) {
    this.currentMode.next(mode);
    localStorage.setItem('themeMode', mode);
  }

  setThemeSettings(value: boolean) {
    this.themeSettings.next(value);
  }
}
