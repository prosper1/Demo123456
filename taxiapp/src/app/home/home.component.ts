import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isApiLoaded = false;
  options: any = {
    componentRestrictions: { country: 'IN' }
  }
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
newAddress=''
  latitude: number = 0.0000000;
  longitude: number = 0.000000;
 
  public appearance = Appearance;
  public zoom: number = 10;
  
  selectedAddress?: PlaceResult;

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

    this.router.navigate(['ranks/'], navigationExtras);
  }

  handleAddressChange(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
    this.q.from = result.name
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  onAutocompleteToSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
    this.q.to = result.name
  }

  onLocationToSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  onGermanAddressMapped($event: GermanAddress) {
    console.log('onGermanAddressMapped', $event);
  }

}
