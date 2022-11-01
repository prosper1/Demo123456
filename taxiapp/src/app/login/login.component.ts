import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,) { 
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
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
      let token = res.key
      localStorage.setItem('token',token);
      if (token){
        this.isLoggedIn = this.authService.isLoggedIn
        this.toastr.success('Login successful', 'Welcome back!!!! Great ');
        this.user()
        this.router.navigate([''])
      }

      else{
        this.toastr.error('Login Failed','Check your credentials')
      }
      
      
    }, err => {
      console.log(err);
      console.log("gdgdgdg");
      this.toastr.error('Login failed','Oopsie!!! something going wrong with your Login')
      this.loading = false;
    });
  }

  user(): void {
    this.authService.user().subscribe(res => {
      console.log(res)
      localStorage.setItem('token',res);
    })
  }

}
