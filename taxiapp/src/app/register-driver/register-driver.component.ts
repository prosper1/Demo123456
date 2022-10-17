import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.css']
})
export class RegisterDriverComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = "";
  isLoggedIn = false;
  state = 0;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,) {
    this.form = this.formBuilder.group({
      username : ['', [ Validators.required,Validators.minLength(5)]],
      email: ['', [ Validators.required, Validators.email]],
      lastName: ['', [ Validators.required]],
      firstName: ['', [ Validators.required]],
      password: ['', [ Validators.required]],
      password2: ['', [ Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.form.controls; }

  onSubmit(): void {

    this.submitted = true;

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

    const userInfo = {
      first_name: this.f.firstName.value,
      last_name: this.f.lastName.value
    }

    this.authService.register(auth)
    .subscribe(res => {
      localStorage.setItem('token', res.key);
      this.isLoggedIn = this.authService.isLoggedIn
      this.toastr.success('Registration successful', 'wow, thats a snap! ');
      console.log(res);
    }, err => {
      console.log(err);
      this.toastr.error('Registration failes','Oopsie!!! something going wrong with your registration')
      console.log("gdgdgdg");

       this.loading = false;
    });

    this.updateUser(userInfo)
  }

  updateUser(userInfo:object){
    this.authService.updateUser(userInfo)
    .subscribe(res => {
      this.toastr.success('Updated User', '.....');
      console.log(res);
      this.router.navigate([''])
    }, err => {
      console.log(err);
      this.toastr.error('Registration failes','Oopsie!!! something going wrong with your registration')
      console.log("gdgdgdg");

       this.loading = false;
    });
  }

}
