import { Component } from '@angular/core';

import {
  ChartModule,
  ColumnSeriesService,
  LegendService,
  TooltipService,
  CategoryService,
  DataLabelService
} from '@syncfusion/ej2-angular-charts';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../../../../public/data';

@Component({
  selector: 'app-bar',
  imports: [ChartModule, HeaderComponent],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss',
  providers: [
    ColumnSeriesService,
    LegendService,
    TooltipService,
    CategoryService,
    DataLabelService
  ]
})
export class BarComponent {
  public primaryXAxis: any = barPrimaryXAxis;
  public primaryYAxis: any = barPrimaryYAxis;
  public chartArea: any = { border: { width: 0 } };
  public tooltip: any = { enable: true };
  public customSeries: any[] = barCustomSeries;

  get legendSettings(): any {
    return { background: 'white' };
  }
}
