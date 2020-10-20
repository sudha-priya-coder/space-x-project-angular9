import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private requestUrl = 'https://api.spacexdata.com/v3/launches';
  constructor(private httpClient: HttpClient) { }
  public sendGETRequestWithParameters(paramData){
    const opts = { params: new HttpParams({fromString: "limit=100"+paramData}) };
    return this.httpClient.get(this.requestUrl, opts);
  }
}