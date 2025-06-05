import { Component, inject } from '@angular/core';
import {
  ChartModule,
  DateTimeService,
  SplineAreaSeriesService,
  LegendService,
} from '@syncfusion/ej2-angular-charts';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../../../../public/data';
import { ThemeService } from '../../../core/services/theme/theme.service';

@Component({
  selector: 'app-area',
  imports: [ChartModule, HeaderComponent],
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss',
  providers: [DateTimeService, SplineAreaSeriesService, LegendService]

})
export class AreaComponent {
  public primaryXAxis: any = areaPrimaryXAxis;
  public primaryYAxis: any = areaPrimaryYAxis;
  public chartArea: any = { border: { width: 0 } };
  public customSeries: any = areaCustomSeries;

  readonly themeService = inject(ThemeService)



}
