import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, View, EventSettingsModel, ResizeService, DragAndDropService, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { scheduleData } from '../../../../public/data';


@Component({
  selector: 'app-calender',
  imports: [HeaderComponent, ScheduleModule, DatePickerModule],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})
export class CalenderComponent {
  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;
  @ViewChild('datePickerObj') datePickerObj!: DatePickerComponent;

  public selectedDate: Date = new Date(2021, 0, 10);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public currentView: View = 'Week';
  public views: View[] = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(args: any): void {
    this.scheduleObj.selectedDate = args.value;
    this.scheduleObj.dataBind();
  }

  public onDragStart(args: any): void {
    args.navigation.enable = true;
  }
}
