import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaxiService } from 'src/app/_services/taxi.service';
import { TaxiranksService } from 'src/app/_services/taxiranks.service';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {

  booking = {
    car: 0,
    booking_user: 0,
    start_date :'',
    end_date : '',
  } 
  constructor(
    private taxiService: TaxiranksService,
    private router: Router
  ) {
    
   }

  ngOnInit(): void {
    if (localStorage.getItem('booking') != null){
      const from_storage = localStorage.getItem('booking')
      this.booking = JSON.parse(from_storage??'')
    }

    else {
      this.booking = {
        car: 0,
        booking_user: 0,
        start_date :'',
        end_date : '',
      } 
    }

    this.payTaxi()

    
  }

  payTaxi(){
    if (this.booking.car === 0){
      this.router.navigate(['my-car-rentals'])
    }
    else {
      this.taxiService.payTaxi(this.booking).subscribe(data => {
        console.log(data)
        if(data.car === this.booking.car){
          localStorage.removeItem('booking')
        }
      })
    }
    
  }

}
