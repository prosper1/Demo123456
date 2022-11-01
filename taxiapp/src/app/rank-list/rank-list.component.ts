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
  ranks = [{
    id:0,
    name: "Bloedmall taxi rank",
    main_image:""
  },{
    id:0,
    name: "Bosman taxi rank",
    main_image:""
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
      }
    });
    
  }

  ngOnInit(): void {
  }

  goto(rankId:number){

  }

}
