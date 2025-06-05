import { Component, Input } from '@angular/core';
import { AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-pie',
  imports: [AccumulationChartAllModule],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss',
})
export class PieComponent {
  @Input() id: string = 'pie-chart';
  @Input() data: any[] = [];
  @Input() legendVisibility: boolean = true;
  @Input() height: string = '400px';
  @Input() isDarkMode: boolean = false;
  @Input() dataLabel: any;

  public get backgroundColor(): string {
    return this.isDarkMode ? '#33373E' : '#fff';
  }


}
