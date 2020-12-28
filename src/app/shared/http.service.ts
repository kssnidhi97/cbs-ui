import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from './session.service';
import { Configuration } from './constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  getHttpClientOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.sessionService.get(Configuration.SessionAcessToken),
      })
    };
    return httpOptions;
  }

  get(url, callback) {
    this.http.get(url, this.getHttpClientOptions())
      .subscribe((response) => {
        callback(this.extractData(response));
      },
        (error: HttpErrorResponse) => {
          callback(error)
        });
  }

  post(url, data, callback) {
    this.http.post(url, data, this.getHttpClientOptions())
      .subscribe((response) => {
        callback(this.extractData(response));
      },
        (error: HttpErrorResponse) => {
          callback(this.extractData(error));
        });
  }

  delete(url, callback) {
    this.http.delete(url, this.getHttpClientOptions())
      .subscribe((response: Response) => {
        callback(this.extractData(response));
      },
        (error: HttpErrorResponse) => {
          callback(this.extractData(error))
        });
  }

  put(url, data, callback) {
    this.http.put(url, data, this.getHttpClientOptions())
      .subscribe((response: Response) => {
        callback(this.extractData(response));
      },
        (error: HttpErrorResponse) => {
          callback(this.extractData(error));
        });
  }

  private extractData(response) {
    // if(response != null && response['_body'] != ""){
    //     response['data'] = JSON.parse(response['_body']);
    // }
    return response;
  }
}
