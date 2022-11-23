import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaxiranksService } from 'src/app/_services/taxiranks.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  user = {
    pk:0,
    username:"",
    email:"",
    first_name:"",
    last_name:"",
    last_login:""
  }

  taxiId = 0

  its404 = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private taxiService: TaxiranksService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,) { 
    this.form = this.formBuilder.group({
      isActive: ['', [ Validators.required, Validators.email]],
      isLoading: ['', [ Validators.required]]
    });
  }

  


  ngOnInit(): void {
    if ( localStorage.getItem('user') != null){
      this.user = JSON.parse(localStorage.getItem('user')??'')
    }
    else{
      this.its404 = true;
    }
  }

  get f() { return this.form.controls; }

  onSubmit(){

    const statusObj = {
      taxi: this.taxiId,
      is_active: this.f.isActive.value,
      is_loading: this.f.isLoading.value,
    }

  }

  taxiStatus(){
    
  }

}
