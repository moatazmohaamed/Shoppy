import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { cartData } from '../../../../../public/data';
import { LucideAngularModule, X, Minus, Plus } from 'lucide-angular';
import { ButtonComponent } from '../button/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ButtonComponent, CommonModule, LucideAngularModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private themeService = inject(ThemeService);
  cartItems = cartData;
  currentColor = this.themeService.currentColor;
  X = X;
  minusIcon = Minus;
  plusIcon = Plus;

  isOpen: boolean = true;

  toggleCart() {
    this.isOpen = !this.isOpen;
  }
}
