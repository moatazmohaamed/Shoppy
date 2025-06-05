import { Component, Input } from '@angular/core';
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from '../../../../../../public/data';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import {
  LineSeriesService,
  DateTimeService,
  LegendService,
  TooltipService,
  DataLabelService,
} from '@syncfusion/ej2-angular-charts';



@Component({
  selector: 'app-line-charts',
  standalone: true,
  imports: [ChartModule],
  providers: [
    LineSeriesService,
    DateTimeService,
    LegendService,
    TooltipService,
    DataLabelService,
  ],
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss'],
})
export class LineChartsComponent {
  @Input() currentMode: string = 'Light';
  @Input() lineCustomSeries: any[] = [];
  @Input() LinePrimaryXAxis: any = {};
  @Input() LinePrimaryYAxis: any = {};

  public chartArea: object = { border: { width: 0 } };
  public tooltip: object = { enable: true };

  get background(): string {
    return this.currentMode === 'Dark' ? '#33373E' : '#fff';
  }

  public legendSettings: object = { background: 'white' };

  public theme: string =
    this.currentMode === 'Dark' ? 'HighContrast' : 'Material';
}
