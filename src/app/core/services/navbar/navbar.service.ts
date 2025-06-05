import { Injectable, inject } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  public currentColor = '#03C9D7';
  public screenSize = 0;
  private themeService = inject(ThemeService);

  public isClicked = {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false,
  };

  setScreenSize(size: number) {
    this.screenSize = size;
  }

  setActiveMenu(value: boolean) {
    this.themeService.activeMenu.next(value);
  }

  setIsClicked(target: string) {
    this.isClicked = {
      cart: false,
      chat: false,
      notification: false,
      userProfile: false,
      [target]: true,
    };
  }
}
