import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomerService } from '../customer.service';
import { Configuration } from 'src/app/shared/constants';
import { SessionService } from 'src/app/shared/session.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  customerFormDiv: boolean = false;
  customerDetailDiv: boolean = false;
  customerTableDiv: boolean = true;
  customerForm: FormGroup;
  date = new Date();
  bdate = new Date();
  age: number;
  users: any[];
  memberDiv: boolean = false;
  userDiv: boolean = false;
  member;
  selectedMember;
  memberFilter: Observable<any[]>;
  memberA = new FormControl();
  members: any[] = [];
  user;
  customers: any[] = [];
  customerDataSource: MatTableDataSource<Element>;
  displayedColumns: string[] = ['name', 'action'];
  loggedUser;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator)

    set initDataSource(paginator: MatPaginator) {
        this.paginator = paginator;
    }

  title = [
    { value: 'Mr', viewValue: 'Mr.' },
    { value: 'Mrs ', viewValue: 'Mrs.' },
    { value: 'Kum ', viewValue: 'Kum.' },
  ];

  gender = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'other', viewValue: 'Other' }
  ];

  introducerTypes = [
    { value: 'Member', viewValue: 'Member' },
    { value: 'User', viewValue: 'Staff' },
  ];

  constructor(public fb: FormBuilder,private sessionService: SessionService, private toastr: ToastrService, private accountService: AccountService, private customerService: CustomerService) {
    this.getCustomers();
    this.loggedUser = sessionService.get(Configuration.LoggedUser);
        if (this.loggedUser) {
            this.loggedUser = JSON.parse(this.loggedUser);
        }
    this.memberFilter = this.memberA.valueChanges
      .pipe(
        startWith(''),
        map(formValue => formValue ? this._filter(formValue) : this.members.slice())
      );
  }

  getCustomers() {
    this.customerService.getCustomer((response) => {
        if (!response.error) {
            this.customers = response;
            this.customerDataSource = new MatTableDataSource(this.customers);
            this.customerDataSource.paginator = this.paginator;
        } else {
            this.toastr.warning("No customers found");
        }
    })
}

  private _filter(formValue) {
    this.selectedMember = this.members.filter(member =>
      member.name.toLowerCase().indexOf(formValue.toLowerCase()) === 0);
    return this.selectedMember;
  }

  applyFilterOnCustomer(filterValue: string) {
    this.customerDataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

  createCustomer() {
    this.initForm();
    this.customerFormDiv = true;
    this.customerTableDiv = true;
    this.customerDetailDiv = false;
  }

  closeCustomerForm() {
    this.customerFormDiv = false;
  }

  initForm() {
    this.customerForm = this.fb.group({
      applicationDate: new FormControl(this.date, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]),
      gender: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),

      customerPersonalDetails: new FormGroup({
        residentialAddress: new FormControl('', Validators.required),
        village: new FormControl('', Validators.pattern('^[a-zA-Z\\s]+$')),
        taluka: new FormControl('', Validators.pattern('^[a-zA-Z\\s]+$')),
        district: new FormControl('', Validators.pattern('^[a-zA-Z\\s]+$')),
        phoneNumber: new FormControl(''),
        pinCode: new FormControl(''),
        religion: new FormControl(''),
        subCaste: new FormControl(''),
        nationality: new FormControl(''),
        dependents: new FormControl('', Validators.pattern('^[0-9]*$')),
        emailId: new FormControl(''),
        rationCardNumber: new FormControl(''),
        voterIdNumber: new FormControl(''),
        panNumber: new FormControl(''),
        aadharCardNumber: new FormControl('', Validators.required),
        annualIncome: new FormControl('', Validators.pattern('^[0-9]*$')),
      }),

      introducersDetails: new FormGroup({
        introducerType: new FormControl(''),
        name: new FormControl(''),
        district: new FormControl(''),
        address: new FormControl(''),
        phoneNumber: new FormControl(''),
        village: new FormControl(''),
        age: new FormControl('', Validators.pattern('^[0-9]*$')),
        taluka: new FormControl(''),
        occupationCode: new FormControl(''),

        user: new FormControl(null),
        memberA: new FormControl(''),
        member: new FormControl(null)
      }),

      familyMemberDetails: this.fb.array([this.initFamilyMemberDetails()]),
    })
  }

  public calculateAge(event: MatDatepickerInputEvent<Date>): void {
    var diff = Math.abs(this.date.getTime() - event.value.getTime());
    this.age = Math.floor((diff / (1000 * 3600 * 24)) / 365);
    this.customerForm.controls["age"].setValue(this.age);
  }

  initFamilyMemberDetails() {
    return this.fb.group({
      title: ['',],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
      occupationCode: ['', Validators.pattern('^[a-zA-Z\\s]+$')],
      age: ['',],
      relation: ['', Validators.pattern('^[a-zA-Z\\s]+$')],
    });
  }

  addFamilyMemberDetails() {
    const control = <FormArray>this.customerForm.controls['familyMemberDetails'];
    control.push(this.initFamilyMemberDetails());
  }

  deleteFamilyMembeDetailsr(index: number) {
    const control = <FormArray>this.customerForm.controls['familyMemberDetails'];
    control.removeAt(index);
  }

  getUsers() {
    this.accountService.getUserMaster((response) => {
      if (!response.error) {
        this.users = response;
      } else {
        this.toastr.warning("No users found");
      }
    })
  }

  onChangeIntroducerType(event) {
    if (event.value == 'Member') {
      this.memberDiv = true;
      this.userDiv = false;
    } else if (event.value == 'User') {
      this.userDiv = true;
      this.memberDiv = false;
      this.getUsers();
    }
  }

  onChangeMember(event) {
    this.member = this.selectedMember[0];
    console.log("selected member", this.selectedMember[0])
    this.customerForm.get('introducersDetails').patchValue({
      member: this.member ? this.member : "",
      name: this.member ? this.member.name : "",
      address: this.member.memberPersonalDetail ? this.member.memberPersonalDetail.residentialAddress : "",
      village: this.member.memberPersonalDetail ? this.member.memberPersonalDetail.village : '',
      taluka: this.member.memberPersonalDetail ? this.member.memberPersonalDetail.taluka : "",
      district: this.member.memberPersonalDetail ? this.member.memberPersonalDetail.district : "",
      phoneNumber: this.member.memberPersonalDetail ? this.member.memberPersonalDetail.phoneNumber : "",
      age: this.member ? this.member.age : "",
      occupationCode: this.member ? this.member.occupationCode : "",
    });

  }

  onChangeUser(event) {
    this.user = event.value;
    this.customerForm.get('introducersDetails').patchValue({
      name: this.user ? this.user.firstName : "",
      address: this.user.userAddress ? this.user.userAddress.city : "",
      phoneNumber: this.user.contactInformation ? this.user.contactInformation.contactNumber : "",
      age: this.user.personnelDetails ? this.user.personnelDetails.age : "",
    });
  }

}
