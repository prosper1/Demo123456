import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  search(){

  }

  goto(taxi_id:number){

  }

}
