import { Component, inject } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { links } from '../../../../../public/data';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  currentColor = '#03C9D7';
  activeMenu = true;
  screenSize = 0;
  links = links;

  readonly sidebarSerives = inject(SidebarService);
  readonly themeService = inject(ThemeService);
  readonly router = inject(Router);

  constructor() {
    this.themeService.activeMenu.subscribe((active) => {
      this.activeMenu = active;
    });
    this.themeService.currentColor.subscribe(
      (color) => (this.currentColor = color)
    );
    this.sidebarSerives.screenSize$.subscribe(
      (size) => (this.screenSize = size)
    );
  }

  ngOnInit() {
    setTimeout(() => {}, 0);
  }

  handleCloseSideBar() {
    if (this.activeMenu !== undefined && this.screenSize <= 900) {
      this.sidebarSerives.setActiveMenu(false);
    }
  }

  toggleMenu() {
    this.sidebarSerives.setActiveMenu(!this.activeMenu);
  }
}
