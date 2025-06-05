import { Component, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { ColorPickerModule, ColorPickerEventArgs } from '@syncfusion/ej2-angular-inputs';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-color-picker',
  imports: [HeaderComponent, ColorPickerModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {
  @ViewChild('inlinePicker') inlinePicker!: ColorPickerComponent;
  @ViewChild('inlinePalette') inlinePalette!: ColorPickerComponent;
  id = inject(PLATFORM_ID)
  public ctrlSwitch: boolean = false;

  public change(args: ColorPickerEventArgs): void {
    if (isPlatformBrowser(this.id)) {

      document.getElementById('preview')!.style.backgroundColor = args.currentValue.hex;
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.id)) {
      document.getElementById('inline-control')!.classList.add('e-mobile-control');
    }
  }


}
