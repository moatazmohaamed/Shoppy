import { Component } from '@angular/core';
import {
  EditSettingsModel,
  GridModule,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { employeesData, employeesGrid } from '../../../../public/data';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-emplooyees',
  imports: [GridModule, HeaderComponent, FormsModule],
  templateUrl: './emplooyees.component.html',
  styleUrl: './emplooyees.component.scss',
})
export default class EmplooyeesComponent {
  employeesData = employeesData;
  employeesGrid = employeesGrid;
  editSettings: EditSettingsModel = {
    allowDeleting: true,
    allowEditing: true,
  };

  public searchText: string = '';

  public pageSettings = { pageCount: 5 };
  public toolbarOptions: ToolbarItems[] = ['Search'];

}
