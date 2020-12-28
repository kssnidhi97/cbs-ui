import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../shared/session.service';
import { LoginService } from './login.service';
import { AccountService } from '../account/account.service';
import { Configuration } from '../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials = { username: '', password: '' };
  loggedUser;
  activeBank;

  constructor(private router: Router, private toastr: ToastrService, private sessionService: SessionService, private loginService: LoginService, private accountService: AccountService ) {
    this.getActiveBankMaster();
   }

  ngOnInit(): void {
  }

  login() {

    this.loginService.validateUser(this.loginCredentials, (response) => {

      if (response.access_token != null) {
        this.sessionService.set(Configuration.SessionAcessToken, response.access_token);
        this.sessionService.set(Configuration.LoggedUser, JSON.stringify(this.loggedUser));

        this.loginService.getLoggedUser((response) => {
          if (response.error) {

          } else {
            this.loggedUser = response;
            this.sessionService.set(Configuration.LoggedUser, JSON.stringify(this.loggedUser));

            if (this.loggedUser.roles[0].name === 'CLERK') {
              this.toastr.success("Logged in", "Successfully");
              this.sessionService.set(Configuration.UserName, this.loggedUser.firstName + " " + this.loggedUser.lastName);
              this.router.navigate(["cbs/dashboard/dashboard"]);
            }
            else if (this.loggedUser.roles[0].name === 'CEO') {
              this.toastr.success("Logged in", "Successfully");
              this.sessionService.set(Configuration.UserName, this.loggedUser.firstName + " " + this.loggedUser.lastName);
              this.router.navigate(["cbs/dashboard/dashboard"]);
            }
            else if (this.loggedUser.roles[0].name === 'PRESIDENT') {
              this.toastr.success("Logged in", "Successfully");
              this.sessionService.set(Configuration.UserName, this.loggedUser.firstName + " " + this.loggedUser.lastName);
              this.router.navigate(["cbs/dashboard/dashboard"]);
            }
          }
        });
      } else if (response && response.status === 500) {
        this.toastr.error("Something went wrong!! try again");
      } else if (response && response.status === 400) {
        this.toastr.error("User name & password not matched");
      } else if (response && response.status === 0) {
        this.toastr.error("Server is not up or Internet issues", "Server or Internet Error");
      } else if (response && response.status === 401) {
        this.toastr.error("User name & password not matched");
      }
    })
  }

  private checkTokenExpiry() {
    this.loginService.isTokenExpired((response) => {
      if (response.status == 200) {
        var user = response.json();
        if (user.authorities[0] === 'ROLE_ADMIN') {
          this.router.navigate(["admin"]);
        }
      }
    })
  }

  getActiveBankMaster() {
    this.accountService.getActiveBank().subscribe(data => {
      if(data){
        this.activeBank = data;
        console.log(this.activeBank,"active bank *****")
      }
    }, error => {
        this.toastr.warning("Please add atleast one bank")
    })
  } 

}
