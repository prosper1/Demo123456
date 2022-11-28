import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaxiService } from '../_services/taxi.service';
import { TaxiranksService } from '../_services/taxiranks.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {
  price = 0
  taxiId = 0
  userId = 0
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private taxiService: TaxiranksService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,) { 
    this.form = this.formBuilder.group({
      name: ['', [ Validators.required]],
      cardNumber: ['', [ Validators.required]],
      expireDate: ['', [ Validators.required]],
      cvv: ['', [ Validators.required]],
    });

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const result = this.router.getCurrentNavigation()?.extras.state?.taxi;
        const priceResult = this.router.getCurrentNavigation()?.extras.state?.price;
  
        this.price = priceResult
        this.taxiId = Number(result)
      }
      else {
        const carId = this.route.snapshot.params.id;
        // this.carService.carDetails(carId).subscribe(data => {
        //   this.sharedData = data;
        //   this.total = this.sharedData.price + 15
        // });
      }
      });
  }

  ngOnInit(): void {
    if ( localStorage.getItem('user') != null){
      const user = JSON.parse(localStorage.getItem('user')??'')
      this.userId = Number(user.pk)
      console.log(this.userId)
    }
    else{
      this.router.navigate(['payment/success'])
    }
    
  }

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
      pay_user: this.userId,
      pay_option: "card",
      pay_taxi: this.taxiId,
      price: this.price,
    };

    this.taxiService.payTaxi(auth)
    .subscribe(res => {
        this.toastr.error('Login Failed','Check your credentials')
        this.router.navigate(['payment/success'])
    }, err => {
      console.log(err);
      this.router.navigate(['payment/failed'])
      this.loading = false;
    });
  }

}
