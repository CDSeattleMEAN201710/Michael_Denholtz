import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Quote} from './../quote'

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  @Input() quotes: Array<Quote>
  @Output() myEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  callParent(data){
    this.myEvent.emit(data)
  }

}
