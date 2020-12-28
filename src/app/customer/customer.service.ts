import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Configuration } from '../shared/constants';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../shared/session.service';

@Injectable()
export class CustomerService {
  constructor(private httpService: HttpService, private httpClient: HttpClient, private sessionService: SessionService) { }

  public getCustomer(callback) {
    const url = Configuration.apiPath + "/customer";
    this.httpService.get(url, callback);
  }

  public saveCustomer(data, callback) {
    const url = Configuration.apiPath + "/customer";
    this.httpService.post(url, data, callback);
  }

  public getCustomerById(id, callback) {
    const url = Configuration.apiPath + "/customer/" + id;
    this.httpService.get(url, callback);
  }

  public deleteCustomerById(id, callback) {
    const url = Configuration.apiPath + "/customer/" + id;
    this.httpService.delete(url, callback);
  }

  public uploadImage(file, id) {
    const endpoint = Configuration.apiPath + "/document-upload/1";
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', endpoint, formdata, {
      reportProgress: true,
      responseType: 'text',
      withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.sessionService.get(Configuration.SessionAcessToken),
      })
    });
    return this.httpClient.request(req);
  }

  public uploadSigniture(file, id) {
    const endpoint = Configuration.apiPath + "/document-upload/8";
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', endpoint, formdata, {
      reportProgress: true,
      responseType: 'text',
      withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.sessionService.get(Configuration.SessionAcessToken),
      })
    });
    return this.httpClient.request(req);
  }

  public uploadDocument(file, id) {
    const endpoint = Configuration.apiPath + "/document-upload/3";
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', endpoint, formdata, {
      reportProgress: true,
      responseType: 'text',
      withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.sessionService.get(Configuration.SessionAcessToken),
      })
    });
    return this.httpClient.request(req);
  }

  public uploadDocumentUpdate(file, id) {
    const endpoint = Configuration.apiPath + "/customer/update-profile-pic/" + id + "/1";
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', endpoint, formdata, {
      reportProgress: true,
      responseType: 'text',
      withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.sessionService.get(Configuration.SessionAcessToken),
      })
    });
    return this.httpClient.request(req);
  }

  public getDocumentCategories(callback) {
    const url = Configuration.apiPath + "/document-category";
    this.httpService.get(url, callback);
  }
}