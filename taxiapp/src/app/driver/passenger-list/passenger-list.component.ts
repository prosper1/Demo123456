import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaxiranksService } from 'src/app/_services/taxiranks.service';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  form: FormGroup;
  searchData = []
  message = "Paid Passengers"
  paidPassenger = [{
    username: "username1",
  },{
    username: "uswrname2",
  }]

  taxi = false
  submitted = false;
  taxiData = {
    "id": 0,
    "model": "",
    "manufature": "",
    "registration": "",
    "driver": 0
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private taxiService: TaxiranksService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,) { 
    this.form = this.formBuilder.group({
      model: ['', [ Validators.required]],
      manufacture: ['', [ Validators.required]],
      registration: ['', [ Validators.required]]
    });
  }

    
  ngOnInit(): void {
    this.taxiStatus()
  }

  get f() { return this.form.controls; }

  addTaxi(){
    console.log("llll")
     if( localStorage.getItem('token')){
       if( localStorage.getItem('driver')){
         const from_storage = localStorage.getItem('driver')
         const driverId = JSON.parse(from_storage??'')
         console.log(driverId)
         const driverInfo = {
            model: this.f.model.value,
            manufature:this.f.manufacture.value,
            registration: this.f.registration.value,
            driver: Number(driverId.id),
         }
         this.taxiService.addTaxi(driverInfo).subscribe(res => {
          this.toastr.success('Added Taxi', '.....');
          this.submitted = true
          this.taxi = true
          this.router.navigate([''])
     }, err => {
       console.log(err);
       this.toastr.error('add failes','Oopsie!!! something going wrong with our process')
       console.log("gdgdgdg");
     });
       }
     }
     
   }

   taxiStatus(){
    this.taxiService.driverTaxiStatus().subscribe(res => {
      if(res.length > 0){
        this.taxi = true
        this.taxiData = res
      }
 }, err => {
   console.log(err);
   this.toastr.error('add failes','Oopsie!!! something going wrong with our process')
   console.log("gdgdgdg");
 });
   
   }


   }

