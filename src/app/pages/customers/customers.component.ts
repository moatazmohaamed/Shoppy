import { Component } from '@angular/core';
import {
  PageSettingsModel,
  SelectionSettingsModel,
  EditSettingsModel,
  GridModule,
  ToolbarItems
} from '@syncfusion/ej2-angular-grids';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { customersData, customersGrid } from '../../../../public/data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customers',
  imports: [HeaderComponent, GridModule, CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  public customersData = customersData;
  public customersGrid = customersGrid;

  public pageSettings: PageSettingsModel = { pageCount: 5 };
  public selectionSettings: SelectionSettingsModel = { persistSelection: true };
  public editSettings: EditSettingsModel = {
    allowDeleting: true,
    allowEditing: true,
  };


  public toolbar: ToolbarItems[] = ['Delete'];


}
