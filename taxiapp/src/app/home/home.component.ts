import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { TaxiranksService } from '../_services/taxiranks.service';
export interface Place {
  /** Place Name */
  placeName: string;
  /** place image URL */
  placePhoto: any;
}

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
  lat = 40.7127753;
  lng = -74.0059728;

  nearByPlaces: Array<Place> = [];
  constructor(
    private router: Router,
    private taxiService: TaxiranksService,
  ) { }


  placesData = [
    {
        "geometry": {
           
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
        "name": "Hatfield",
        "photos": [
            {
                "height": 1600,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113425774443152453526\">Cliff Yumba Mpiana Wane</a>"
                ],
                "photo_reference": "Aap_uED12wJTkIa2q8GYuKNo9esvR22Rgbv5-zN41rVmSb6Pxx-R5T36BhMQVvAo5FyEbVQYd_LJSuBLEu5JDIoFeRbkXPZlOQnwsj3mnb3i5gv3f3rBP13X7sqZzQGL3Qfu2bZs3OgZ0KjSAxFQTYPTrfV_CyxLZ_euIO3tO3sKhxTSDN5d",
                "width": 1200
            }
        ],
        "place_id": "ChIJ4WEudAxglR4RmHDutMnSdZA",
        "reference": "ChIJ4WEudAxglR4RmHDutMnSdZA",
        "scope": "GOOGLE",
        "types": [
            "sublocality_level_1",
            "sublocality",
            "political"
        ],
        "vicinity": "Hatfield"
    },
    
]

images = [
  '../../../assets/images/nearby/1.webp',
  '../../../assets/images/nearby/be4d3ba5-08d7-4afe-95a7-f2da6453886a.webp',
  '../../../assets/images/nearby/e639b7ab-aee3-48ee-9743-216684a51319.webp',
  '../../../assets/images/nearby/2.webp',
]

places = [
  {
  name: 'Pretoria',
  src: '../../../assets/images/nearby/1.webp',
  distance:'--'
  },
  {
    name: 'Johannesburg',
    src: '../../../assets/images/nearby/be4d3ba5-08d7-4afe-95a7-f2da6453886a.webp',
    distance:'--'
    },
    {
      name: 'Germiston',
      src:  '../../../assets/images/nearby/e639b7ab-aee3-48ee-9743-216684a51319.webp',
      distance:'--'
      },
      {
        name: 'Cape Town',
        src:  '../../../assets/images/nearby/2.webp',
        distance:'--'
        },
  

  ]

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

  getLocation() {
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
      this.taxiService.nearByPlaces(this.lat.toString(),this.lng.toString()).subscribe(res => {
        localStorage.setItem('nearby',JSON.stringify(res.data))
        this.placesData = res.data
        let count = 0;
        this.places = []
        for(let place of this.placesData){
          let n = Math.floor((Math.random() * 3) + 1)
          this.places.push({name:place.name,src:this.images[n],distance:'40'})
          count = count + 1
        }
      })

      let newLat =this.lat + 0.1
      let newLng = this.lng + 0.01
      this.taxiService.nearByPlaces(newLat.toString(),newLng.toString()).subscribe(res => {
        localStorage.setItem('nearby',JSON.stringify(res.data))
        this.placesData = res.data
        let count = 0;
        for(let place of this.placesData){
          let n = Math.floor((Math.random() * 3) + 1)
          this.places.push({name:place.name,src:this.images[n],distance:'50'})
          count = count + 1
        }
      })
      
    });
    
  }


}
