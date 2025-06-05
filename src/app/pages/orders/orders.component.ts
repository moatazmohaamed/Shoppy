import { Component } from '@angular/core';
import {
  contextMenuItems,
  ordersData,
  ordersGrid,
} from '../../../../public/data';
import { HeaderComponent } from '../../shared/components/header/header.component';
import {
  EditSettingsModel,
  ContextMenuItem,
  GridModule,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [HeaderComponent, GridModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  public ordersData: any[] = ordersData;
  public contextMenu = contextMenuItems;

  public ordersGrid: any[] = ordersGrid;
  public editSettings: EditSettingsModel = {
    allowDeleting: true,
    allowEditing: true,
  };
  public pageSettings = { pageSize: 10 };
}
