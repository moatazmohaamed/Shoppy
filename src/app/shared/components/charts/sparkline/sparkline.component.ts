import { Component, Input } from '@angular/core';
import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-sparkline',
  standalone: true,
  imports: [SparklineAllModule],
  templateUrl: './sparkline.component.html',
  styleUrl: './sparkline.component.scss',
})
export class SparklineComponent {
  @Input() id!: string;
  @Input() height!: string;
  @Input() width!: string;
  @Input() color!: string;
  @Input() data: any[] = [];
  @Input() type: 'Area' | 'Line' | 'Column' | 'WinLoss' = 'Line';
  @Input() currentColor: string = '#000000';
}
