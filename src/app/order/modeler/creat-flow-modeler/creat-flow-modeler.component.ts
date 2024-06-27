import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-creat-flow-modeler',
  templateUrl: './creat-flow-modeler.component.html',
  styleUrls: ['./creat-flow-modeler.component.css']
})
export class CreatFlowModelerComponent implements OnInit{

  dates: Date[] = [];

  constructor(private date: DataService) {}

  ngOnInit() {
    this.initCalendarDates();
  }

  private initCalendarDates() {
    const { year, monthIndex } = this.date.getCurrent();

    

    this.dates = [
      new Date(year, monthIndex)
    ];
  }

}
