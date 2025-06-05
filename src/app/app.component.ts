import {
  AfterViewInit,
  Component,
  inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Cog } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ThemeSettingsComponent } from './shared/components/settings/theme-settings/theme-settings.component';
import { ThemeService } from './core/services/theme/theme.service';
import { isPlatformBrowser } from '@angular/common';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWXlec3VVQmBcU0Z2X0JWYUA='
);

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    LucideAngularModule,
    ButtonModule,
    TooltipModule,
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    ThemeSettingsComponent,
    SidebarComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard';
  currentColor: string = '';
  currentMode: string = '';
  activeMenu: boolean = true;
  themeSettings: boolean = false;
  private themeService = inject(ThemeService);
  id = PLATFORM_ID;
  visible: boolean = false;
  readonly Cog = Cog;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.id)) {
      const color = localStorage.getItem('colorMode');
      const mode = localStorage.getItem('themeMode');
      if (color && mode) {
        this.themeService.setColor(color);
        this.themeService.setMode(mode);
      }
      console.log('test');
    }

    this.themeService.currentColor.subscribe(
      (val: string) => (this.currentColor = val)
    );
    this.themeService.currentMode.subscribe(
      (val: string) => (this.currentMode = val)
    );
    this.themeService.activeMenu.subscribe(
      (val: boolean) => (this.activeMenu = val)
    );
    this.themeService.themeSettings.subscribe(
      (val: boolean) => (this.themeSettings = val)
    );
  }

  setThemeSettings(value: boolean) {
    this.themeService.setThemeSettings(value);
  }
}
