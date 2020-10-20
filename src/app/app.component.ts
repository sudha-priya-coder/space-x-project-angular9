import { Component, OnInit } from '@angular/core';
import { SpaceXService } from './space-x.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spaceXLaunches';
  launch_success = false;
  land_success = false;
  launch_year = false;
  public selectedFilters = [];
  public spaceXData;
  constructor(private spaceXService: SpaceXService){}
  ngOnInit(): void {
    this.spaceXService.sendGETRequestWithParameters('&launch_success=true').subscribe(res => {
      this.spaceXData = res;
    });
  }
  createParamFormat(type,value) {
    this.selectedFilters[type] = value;
    let params = '';     
    for (const [key, value] of Object.entries(this.selectedFilters)) {
      params = params+ '&'+ key +'='+ value;
    }
    console.log(params);
    this.spaceXService.sendGETRequestWithParameters(params).subscribe(res => {
      this.spaceXData = res;
    });
  }
}
