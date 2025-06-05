import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { LucideAngularModule, X } from 'lucide-angular';
import { chatData, chatItems } from '../../../../../public/data';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button/button.component';

@Component({
  selector: 'app-chat',
  imports: [LucideAngularModule, CommonModule, ButtonComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  private themeService = inject(ThemeService);
  chatData = chatItems;
  currentColor = this.themeService.currentColor;
  X = X;
  isOpen: boolean = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
