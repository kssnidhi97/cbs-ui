import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { Configuration } from '../shared/constants';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  loggedUser;

  constructor(private router: Router, private sessionService: SessionService) {
    this.loggedUser = sessionService.get(Configuration.LoggedUser);
    if (this.loggedUser) {
      this.loggedUser = JSON.parse(this.loggedUser);
    }
  }

  logout() {
    localStorage.removeItem(Configuration.LoggedUser);
    localStorage.removeItem(Configuration.UserName);
    localStorage.removeItem(Configuration.UserId);
    localStorage.removeItem(Configuration.SessionAcessToken);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
