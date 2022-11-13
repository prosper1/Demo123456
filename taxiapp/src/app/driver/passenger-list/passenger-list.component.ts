import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxiranksService } from 'src/app/_services/taxiranks.service';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {

  searchData = []
  message = "Paid Passengers"
  paidPassenger = [{
    username: "username1",
  },{
    username: "uswrname2",
  }]
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taxiService: TaxiranksService,
  ) { 

    
  }

  ngOnInit(): void {
  
  }

  

}
