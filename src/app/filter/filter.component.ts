import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../space-x.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public activeLaunching = '';
  public activeYear = '';
  public activeLanding = '';
  public showLoader = false;
  public noDataFound = false;
  public spaceXData;
  private selectedFilters = [];
  constructor(private spaceXService: SpaceXService) { }
  /**
   * To get first time data (default data)
   */
  ngOnInit(): void {
    this.getSpaceXdata();
  }

  /**
   * To get spaceXData
   * @param type {Filter purpose key }
   * @param value {Filter purpose value }
   * @param classType { Styling purpose } 
   */
  public getSpaceXdata(type?, value?, classType?) {
    this.showLoader = true;
    this.spaceXData = [];
    let params = '';
    if (type) {
      this.setActiveClass(type, classType);
      this.selectedFilters[type] = value;
      for (const [key, value] of Object.entries(this.selectedFilters)) {
        params = params + '&' + key + '=' + value;
      }
    }
    this.spaceXService.sendGETRequestWithParameters(params).subscribe(res => {
      this.showLoader = false;
      this.spaceXData = res;
      if (this.spaceXData && this.spaceXData.length > 0) {
        this.spaceXData = res;
        this.noDataFound = false;
      } else {
        this.noDataFound = true;
      }
    });
  }
  /**
   * To set Styling based on selected filters
   * @param type {which filter like year,launching,landing}
   * @param classType {filter value} 
   */
  private setActiveClass(type, classType) {
    switch (type) {
      case 'launch_success': {
        this.activeLaunching = classType;
        break;
      }
      case 'land_success': {
        this.activeLanding = classType;
        break;
      }
      case 'launch_year': {
        this.activeYear = classType;
        break;
      }
    }
  }
}
