import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  customerFormDiv: boolean = false;
  customerDetailDiv: boolean = false;
  customerTableDiv: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  createCustomer() {
    this.customerFormDiv = true;
    this.customerTableDiv = true;
    this.customerDetailDiv = false;
  }

  closeCustomerForm() {
    this.customerFormDiv = false;
  }

}
