import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = "";
  isLoggedIn = false;
  submittedR = false;
  state = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService) { 
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required]],
      password: ['', [ Validators.required]]
    });
  }

  ngOnInit(): void {
  }
   // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit(): void {

    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    // use the rest service here.
    const auth = {
      email: this.f.email.value,
      password: this.f.password.value
    };

    this.authService.login(auth)
    .subscribe(res => {
      localStorage.setItem('token', res.key);
      this.isLoggedIn = this.authService.isLoggedIn
      
    }, err => {
      console.log(err);
      console.log("gdgdgdg");
      this.loading = false;
    });
  }

}
