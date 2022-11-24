import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { filter } from 'rxjs';
import { TaxiranksService } from '../_services/taxiranks.service';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.css']
})
export class RankListComponent implements OnInit {
  searchData = []
  message = "Recommended Taxi Ranks"
  ranks = [{
    "id": 0,
    "name": "mtn rank",
    "location": "JHB",
    "ranking_taxis": [
        {
            "taxi": {
                "id": 1,
                "model": "xxxx",
                "manufature": "xxxx",
                "registration": "xxxxx",
                "driver": 0
            },
            "destination": "xxxxxxxx",
            "main_position": "EB40",
            "second_position": "EB40"
        }
    ]
  },
  {
    "id": 37,
    "name": "wonderpark",
    "location": "Pretoria",
    "ranking_taxis": [
        {
            "taxi": {
                "id": 1,
                "model": "Quantum",
                "manufature": "Toyota",
                "registration": "xxxx-ddd",
                "driver": 1
            },
            "destination": "MABOPANE TAXI RANK",
            "main_position": "EB40",
            "second_position": "EB40"
        }
    ]
}]
  title = 'My first AGM project';
  lat =24.799448;
  lng = 120.979021;
  status = false;
  directions = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    }

  distance = 0
  price = 0
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taxiService: TaxiranksService,
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const newObj = this.router.getCurrentNavigation()?.extras.state
        this.searchData = newObj?.q
        this.ranks = this.searchData
        this.search()
        this.getDirection()
        this.calculatePriceByDistance()
      }
    });
    
  }

  ngOnInit(): void {
  
  }

  goto(id: any): void {
    
    const filteredRanks = this.ranks.filter(rank => rank.id === id);
    console.log(filteredRanks[0].ranking_taxis)
    var filtered = filteredRanks[0].ranking_taxis.filter((ar: { destination: string; }) => ar.destination.split(" ")[0].toLowerCase() === this.searchData[1]??''.toLowerCase())
    console.log(filtered[0])
    const navigationExtras: NavigationExtras = {
      state: {
        taxis: filtered[0],
        price: this.price
      }
    };
    this.router.navigate(['taxi', 1], navigationExtras);
  }
  search(){
    this.taxiService.search(this.searchData[0]).subscribe(
      data => {
        this.ranks = data;
        if(this.ranks.length === 0){
          this.message = "Taxi Ranks Not Found."
          this.status = true;
        }
        else{
          this.message = "Result Of Taxi ranks you should use."
        }
          
      });
  }

  placeCoordinates(origin:string,destination:string){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+origin+'&key=AIzaSyDB1U3Pe1Kdd-D88F2ZRi1_jCYP7Hif9fU')
      .then(response => response.json())
      .then(data => {
        this.lat = data.results[0].geometry.location.lat;
        this.lng  = data.results[0].geometry.location.lng;
        this.directions.origin = { lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}
      
      })

      fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+destination+'&key=AIzaSyDB1U3Pe1Kdd-D88F2ZRi1_jCYP7Hif9fU')
      .then(response => response.json())
      .then(data => {
        this.lat = data.results[0].geometry.location.lat;
        this.lng  = data.results[0].geometry.location.lng;
        this.directions.destination = { lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}
      
      })
  }


  public  getDirection() {
    console.log(this.searchData)
    this.placeCoordinates(this.searchData[0],this.searchData[1])
  }

  calculatePriceByDistance(){
    const locationsObj = {
      origin:this.searchData[0],
      destination: this.searchData[1]
    }
    this.taxiService.distance(locationsObj).subscribe(
      data => {
        console.log(data.data.rows[0].elements)
        this.price =Number(((data.data.rows[0].elements[0].distance.value / 1000 ) * 0.60).toFixed(2))
      });
  }


  filterRankingTaxis(){
    const rankingTaxis = [{destination:""}]
    var filtered = rankingTaxis.filter((ar: { destination: string; }) => ar.destination.split(" ")[0] === "MABOPANE")
    console.log(filtered)
  }
}
