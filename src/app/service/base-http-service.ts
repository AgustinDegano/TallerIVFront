import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  protected apiUrl = "http://localhost:8080/";
  constructor(protected httpClient: HttpClient) { }

  protected buildUrl(endpoint: string): string {
    return this.apiUrl + endpoint;
  }

  protected buildUrlWithParams(endpoint: string, params: any): string {
    let url = this.apiUrl + endpoint;
    let first = true;
    for (let key in params) {
      if (first) {
        url += "?";
        first = false;
      } else {
        url += "&";
      }
      url += key + "=" + params[key];
    }
    return url;
  }
}
