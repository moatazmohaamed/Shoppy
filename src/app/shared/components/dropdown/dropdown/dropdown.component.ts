import { Component, Input } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [DropDownListModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() isDarkMode: boolean = false;

  public get backgroundColor(): string {
    return this.isDarkMode ? '#33373E' : '#fff';
  }

  dropdownData = [
    { Id: '1', Time: 'March 2021' },
    { Id: '2', Time: 'April 2021' },
    { Id: '3', Time: 'May 2021' },
  ];
}
