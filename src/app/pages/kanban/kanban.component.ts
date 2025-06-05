import { Component } from '@angular/core';
import { kanbanData, kanbanGrid } from '../../../../public/data';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-kanban',
  imports: [KanbanModule, HeaderComponent, CommonModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent {
  kanbanData = kanbanData;
  kanbanGrid = kanbanGrid;
  public cardSettings: Object = {
    contentField: 'Summary',
    headerField: 'Id',

  };
}
