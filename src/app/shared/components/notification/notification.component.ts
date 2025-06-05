import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { LucideAngularModule, X, Minus, Plus } from 'lucide-angular';
import { chatData } from '../../../../../public/data';
import { ButtonComponent } from '../button/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [LucideAngularModule, ButtonComponent, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  private themeService = inject(ThemeService);
  chatData = chatData;
  currentColor = this.themeService.currentColor;
  X = X;

  isOpen: boolean = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
