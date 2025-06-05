import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss',
})
export class NavButtonComponent {
  @Input() title: string = '';
  @Input() color: string = '';
  @Input() dotColor: string = '';
  @Output() buttonClick = new EventEmitter<void>();
}
