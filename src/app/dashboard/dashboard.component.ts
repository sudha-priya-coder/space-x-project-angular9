import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges {
 @Input()spaceXData;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.spaceXData = this.spaceXData;
  }
}
