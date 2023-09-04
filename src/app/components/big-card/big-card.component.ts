import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id:string = "0";

  @Input()
  bigCardImg:string = "";

  @Input()
  bigCardImgAlt:string = "";

  @Input()
  bigCardDate:string = "";

  @Input()
  bigCardTitle:string = "";
  
  @Input()
  bigCardDescription:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
