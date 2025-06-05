import { Component, inject } from '@angular/core';
import { themeColors } from '../../../../../../public/data';
import { ThemeService } from '../../../../core/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { LucideAngularModule, X } from 'lucide-angular';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-theme-settings',
  standalone: true,
  imports: [CommonModule, TooltipModule, LucideAngularModule],
  templateUrl: './theme-settings.component.html',
  styleUrl: './theme-settings.component.scss',
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      state(
        'out',
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        })
      ),
      transition('out => in', [animate('300ms ease-out')]),
      transition('in => out', [animate('300ms ease-in')]),
    ]),
  ],
})
export class ThemeSettingsComponent {
  private themeService = inject(ThemeService);
  readonly X = X;
  themeColors = themeColors;
  currentColor: string = '';
  currentMode: string = '';
  animationState = 'out';

  constructor() {
    this.themeService.currentColor.subscribe(
      (val: string) => (this.currentColor = val)
    );
    this.themeService.currentMode.subscribe(
      (val: string) => (this.currentMode = val)
    );
  }

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'in';
    }, 10);
  }

  changeColor(color: string) {
    this.themeService.setColor(color);
  }

  changeMode(event: Event) {
    const target = event.target as HTMLInputElement;
    this.themeService.setMode(target.value);
  }

  closeSettings() {
    this.animationState = 'out';
    setTimeout(() => {
      this.themeService.setThemeSettings(false);
    }, 300);
  }
}
