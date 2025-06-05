import { Component, Input } from '@angular/core';
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../../../../public/data';

import { ChartAllModule } from '@syncfusion/ej2-angular-charts';
import {
  CategoryService,
  StackingColumnSeriesService,
  LegendService,
  TooltipService,
} from '@syncfusion/ej2-angular-charts';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-stacked',
  imports: [ChartAllModule, CommonModule],
  templateUrl: './stacked.component.html',
  providers: [
    CategoryService,
    StackingColumnSeriesService,
    LegendService,
    TooltipService,
  ],
  standalone: true,
  styleUrl: './stacked.component.scss',
})
export class StackedComponent {
  @Input() width: string = '100%';
  @Input() height: string = '420px';
  @Input() isDarkMode: boolean = false;

  public get backgroundColor(): string {
    return this.isDarkMode ? '#33373E' : '#fff';
  }
  public primaryXAxis = stackedPrimaryXAxis;
  public primaryYAxis = stackedPrimaryYAxis;
  public stackedCustomSeries = stackedCustomSeries;
  public chartBackground = '#fff';
}
