import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    id:0,
    name: "Bloedmall taxi rank",
    ranking_taxis: ""
  },{
    id:0,
    name: "Bosman taxi rank",
    ranking_taxis: ""
  }]
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
      }
    });
    
  }

  ngOnInit(): void {
  
  }

  goto(rankId:number){

  }
  search(){
    this.taxiService.search(this.searchData[0]).subscribe(
      data => {
        this.ranks = data;
        this.message = "Result Of Taxi ranks you should use."
      });
  }
  

}
