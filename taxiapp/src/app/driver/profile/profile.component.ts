import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    pk:0,
    username:"",
    email:"",
    first_name:"",
    last_name:"",
    last_login:""
  }

  its404 = false;
  
  constructor() { }

  ngOnInit(): void {
    if ( localStorage.getItem('user') != null){
      this.user = JSON.parse(localStorage.getItem('user')??'')
    }
    else{
      this.its404 = true;
    }
  }

}
