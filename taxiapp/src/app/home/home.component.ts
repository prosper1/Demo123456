import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ranks = [
    {
        "id":0,
        "name": "xxxxx",
        "brand": "TAxi rank populate here",
        "owner": 6,
        "category": [
            1
        ],
        "extra": "dygfggfdf hfdhfdhfbdf fdhbfhdbfdhbfdhf",
        "is_booked": true,
        "color": "black",
        "main_image": "",
        "price": 0,
        "bookings": [
            "http://localhost:8000/api/ranks/bookings/1/",
            "http://localhost:8000/api/ranks/bookings/2/",
            "http://localhost:8000/api/ranks/bookings/3/"
        ]
    },
    {
      "id":0,
      "name": "xxxxx",
      "brand": "TAxi rank populate here",
      "owner": 6,
      "category": [
          1
      ],
      "extra": "dygfggfdf hfdhfdhfbdf fdhbfhdbfdhbfdhf",
      "is_booked": true,
      "color": "black",
      "main_image": "",
      "price": 0,
      "bookings": [
          "http://localhost:8000/api/ranks/bookings/1/",
          "http://localhost:8000/api/ranks/bookings/2/",
          "http://localhost:8000/api/ranks/bookings/3/"
      ]
  }

]

q = {
  from: '',
  to: '',
};
cartItems = 1;
showing = 0;
productId: any;
featuredProducts= [];
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  goto(taxi_id:number){

  }

  search(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        q: [
          this.q.from,
          this.q.to,
          
        ]
      }
    };

    this.router.navigate(['rank-list/'], navigationExtras);
  }

}
