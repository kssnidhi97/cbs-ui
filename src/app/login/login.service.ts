import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../shared/http.service';
import { SessionService } from '../shared/session.service';
import { Router } from '@angular/router';
import { Configuration } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private httpService: HttpService,
    private sessionService: SessionService, private router: Router) { }

  validateUser(credentials, callback) {
    const body = JSON.stringify({ username: credentials.username, password: credentials.password });
    const url = Configuration.AuthPath + "/token" + "?grant_type=password&username=" + credentials.username + "&password=" + credentials.password;
    this.httpClient.post(url, body, {
      headers: new HttpHeaders()
        .set('Authorization', 'Basic ' + btoa('cbs-service:cbs'))
        .set('Content-Type', 'application/x-www-form-urlencoded'),
    })
      .subscribe((response: Response) => {
        callback(this.extractData(response));
      },
        (error: Response) => {
          callback(this.extractData(error));
        });
  }

  private extractData(response: Response) {
    return response;
  }

  getLoggedUser(callback) {
    const url = Configuration.apiPath + "/logged-user";
    this.httpService.get(url, callback);
  }

  public isTokenExpired(callback) {
    let accessToken = localStorage.getItem(Configuration.SessionAcessToken);
    let url = Configuration.AuthPath + "/check_token?token=" + accessToken;
    return this.httpService.get(url, callback);
  }

  public isLoggedIn() {
    if (this.sessionService.get(Configuration.LoggedUser)) {
      return true
    } else {
      return false;
    }
  }

  public loggedOut() {
    this.logoutFromServer((response) => {
      console.log(response);
    });
    localStorage.clear();
    localStorage.removeItem(Configuration.LoggedUser);
    localStorage.removeItem(Configuration.UserName);
    localStorage.removeItem(Configuration.UserId);
    localStorage.removeItem(Configuration.SessionAcessToken);

    this.router.navigate(["/cbs/login/page"]);
  }

  logoutFromServer(callback) {
    const url = Configuration.apiPath + "/logged-out";
    this.httpService.get(url, callback);
  }

}
