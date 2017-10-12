import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:object
  flag:boolean

  constructor() { }

  ngOnInit() {
    this.user = {
    }
    this.flag = false
  }
  onSubmit(){
    this.flag = true
  }
}
