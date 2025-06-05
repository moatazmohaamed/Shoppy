import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LucideAngularModule, X } from 'lucide-angular';
import { ButtonComponent } from '../button/button/button.component';
import { userProfileData } from '../../../../../public/data';
import { ThemeService } from '../../../core/services/theme/theme.service';

@Component({
  selector: 'app-user-profile',
  imports: [LucideAngularModule, CommonModule, ButtonComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  X = X;
  profileItems = userProfileData;
  currentColor = inject(ThemeService).currentColor;
  isOpen: boolean = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
