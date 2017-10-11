import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {
  colors:Array<string>
  moreColors:Array<string>
  
  

  constructor() { }

  ngOnInit() {
    function colorator():Array<string>{
      let colors = ['red','blue','green','orange','black','yellow']
      let arr = []
      for(let i = 0; i < 10; i++){
        arr.push(colors[Math.floor(Math.random()*6)])
      }
      return arr
    }
    this.moreColors = colorator()
  }

}
