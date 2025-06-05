import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { NavbarService } from '../../../core/services/navbar/navbar.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { CartComponent } from '../cart/cart.component';
import { NotificationComponent } from '../notification/notification.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ChatComponent } from '../chat/chat.component';
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  LucideAngularModule,
  Menu,
  MessageCircle,
  Bell,
  Expand,
  ShoppingCart,
} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    CartComponent,
    NotificationComponent,
    UserProfileComponent,
    ChatComponent,
    NavButtonComponent,
    LucideAngularModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly navbarService = inject(NavbarService);
  readonly themeService = inject(ThemeService);
  readonly Menu = Menu;
  readonly MessageCircle = MessageCircle;
  readonly Bell = Bell;
  readonly ShoppingCart = ShoppingCart;
  readonly Expand = Expand;
  id = inject(PLATFORM_ID);

  constructor() {}

  ngOnInit() {
    this.updateScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScreenSize();
  }

  updateScreenSize() {
    let width = 0;
    if (isPlatformBrowser(this.id)) {
      width = window.innerWidth;
    } else {
      width = 900; // Default width for server-side rendering
    }
    this.navbarService.setScreenSize(width);
    this.navbarService.setActiveMenu(width > 900);
  }

  toggleMenu() {
    this.navbarService.setActiveMenu(!this.themeService.activeMenu.value);
  }

  handleClick(target: string) {
    this.navbarService.setIsClicked(target);
  }
}
