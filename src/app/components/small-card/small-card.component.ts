import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id:string="0"

  @Input()
  smallCardImg:string = "";

  @Input()
  smallCardImgAlt:string = "";

  @Input()
  smallCardDate:string = "";

  @Input()
  smallCardTitle:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
