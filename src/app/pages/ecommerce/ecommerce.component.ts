import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme/theme.service';
import {
  earningData,
  ecomPieChartData,
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  medicalproBranding,
  recentTransactions,
  SparklineAreaData,
  weeklyStats,
} from '../../../../public/data';
import { ButtonComponent } from '../../shared/components/button/button/button.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, DollarSign, Dot } from 'lucide-angular';
import { SparklineComponent } from '../../shared/components/charts/sparkline/sparkline.component';
import { StackedComponent } from '../../pages/Charts/stacked/stacked.component';
import { PieComponent } from '../../shared/components/charts/pie/pie.component';
import { AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown/dropdown.component';

import { LineChartsComponent } from '../../shared/components/charts/line-charts/line-charts.component';

@Component({
  selector: 'app-ecommerce',
  imports: [
    ButtonComponent,
    CommonModule,
    LucideAngularModule,
    SparklineComponent,
    StackedComponent,
    PieComponent,
    AccumulationChartAllModule,
    DropdownComponent,
    LineChartsComponent,
  ],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss',
})
export class EcommerceComponent {
  private themeService = inject(ThemeService);
  DollarSign = DollarSign;
  Dot = Dot;

  currentColor: any = this.themeService.currentColor;
  currentMode = this.themeService.currentMode;

  // Data imports
  earningData = earningData;
  medicalproBranding = medicalproBranding;
  recentTransactions = recentTransactions;
  weeklyStats = weeklyStats;
  sparklineAreaData = SparklineAreaData;
  ecomPieChartData = ecomPieChartData;
  lineCustomSeries = lineCustomSeries;
  LinePrimaryXAxis = LinePrimaryXAxis;
  LinePrimaryYAxis = LinePrimaryYAxis;
}
