import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  ranks = [{
    id:0,
    name: "Bloedmall taxi rank",
    main_image:""
  },{
    id:0,
    name: "Bosman taxi rank",
    main_image:""
  }]
  constructor() { }

  ngOnInit(): void {
  }

  goto(id:number){

  }

}
