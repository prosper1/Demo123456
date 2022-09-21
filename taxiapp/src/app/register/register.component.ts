import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = "";
  isLoggedIn = false;
  submittedR = false;
  state = '';

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService) {
    this.form = this.formBuilder.group({
      username : ['', [ Validators.required,Validators.minLength(5)]],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required]],
      password2: ['', [ Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.form.controls; }

  onSubmit(): void {

    this.submittedR = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    if (this.f.password.value != this.f.password2.value){
      this.f.password2.setErrors({doesNotMatch:true})
      return;
    }

    this.loading = true;

    // use the rest service here.
    const auth = {
      username: this.f.username.value,
      email: this.f.email.value,
      password1: this.f.password.value,
      password2: this.f.password2.value,
    };

    this.authService.register(auth)
    .subscribe(res => {
      localStorage.setItem('token', res.key);
      this.isLoggedIn = this.authService.isLoggedIn
      console.log(res);
    }, err => {
      console.log(err);
      console.log("gdgdgdg");
      this.loading = false;
    });
  }

}
