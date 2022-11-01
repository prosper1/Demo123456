import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ranks = [{
    id:0,
    name: "Siyaya XYZ 123 GP",
    main_image:""
  },
  {
    id:0,
    name: "Quantum XYZ 123 GP",
    main_image:""
  }]
  constructor() { }

  ngOnInit(): void {
  }

  goto(itemId:number){

  }

}
