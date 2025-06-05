import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() icon: any;
  @Input() color: string = 'black';
  @Input() bgColor: string = 'black';
  @Input() text: string = '';
  @Input() borderRadius: string = '4px';
  @Input() width: string = 'auto';
  @Input() bgHoverColor: string = '';
  @Input() size: string = '';
}
