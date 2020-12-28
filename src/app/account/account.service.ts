import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Configuration } from '../shared/constants';
import { HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import { SessionService } from '../shared/session.service';

@Injectable()
export class AccountService {
  constructor(private httpService: HttpService, private httpClient: HttpClient, private sessionService: SessionService) { }

  public getGroupMaster(callback) {
    const url = Configuration.apiPath + "/user-roles";
    this.httpService.get(url, callback);
  }

  public saveGroupMaster(data, callback) {
    const url = Configuration.apiPath + "/user-role";
    this.httpService.post(url, data, callback);
  }

  public getBankMaster(callback) {
    const url = Configuration.apiPath + "/bank";
    this.httpService.get(url, callback);
  }

  public getActiveBankMaster(callback) {
    const url = Configuration.apiPath + "/bank/active-bank";
    this.httpService.get(url, callback);
  }

  public getActiveBank() {
    const endpoint = Configuration.partialPath + "/active-bank";
    return this.httpClient.get(endpoint);
  }

  public saveBankMaster(data, callback) {
    const url = Configuration.apiPath + "/bank";
    this.httpService.post(url, data, callback);
  }

  public getBankById(id, callback) {
    const url = Configuration.apiPath + "/bank/" + id;
    this.httpService.get(url, callback);
  }

  public getUserMaster(callback) {
    const url = Configuration.apiPath + "/user";
    this.httpService.get(url, callback);
  }

  public getUserById(id, callback) {
    const url = Configuration.apiPath + "/user/" + id;
    this.httpService.get(url, callback);
  }

  public saveUserMaster(data, callback) {
    const url = Configuration.apiPath + "/user";
    this.httpService.post(url, data, callback);
  }

  public updateUserMaster(data, callback) {
    const url = Configuration.apiPath + "/update-user";
    this.httpService.post(url, data, callback);
  }

  public deleteUserById(id, callback) {
    const url = Configuration.apiPath + "/user/" + id;
    this.httpService.delete(url, callback);
  }

  public saveBODDate(data, callback) {
    const url = Configuration.apiPath + "/bod-date";
    this.httpService.post(url, data, callback);
  }

  public getBODDateByStatus(callback) {
    const url = Configuration.apiPath + "/bod-date";
    this.httpService.get(url, callback);
  }

  public endBODDate(id, callback) {
    const url = Configuration.apiPath + "/bod-date/" + id;
    this.httpService.delete(url, callback);
  }

  //Upload logo and image both
  public uploadLogoAndImage(file, bankId, documentCategoryId, imageType) {
    // const endpoint = Configuration.apiPath + "/bank/upload-logo-image/" +bankId +"/6/" +imageType;
    const endpoint = Configuration.apiPath + "/bank/upload-logo-image/" + bankId + "/" + documentCategoryId + "/" + imageType;
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

  public userPasswordChange(data, callback) {
    const url = Configuration.apiPath + "/user/password-reset";
    this.httpService.post(url, data, callback);
  }

  public getAllBankMasters(callback) {
    const url = Configuration.apiPath + "/bank/all-bank";
    this.httpService.get(url, callback);
  }
}