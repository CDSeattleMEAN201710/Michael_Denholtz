import { Component, OnInit } from '@angular/core';
import {Quote} from './quote'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  quote: Quote
  quoteArray:Array<Quote>

  constructor() { }

  ngOnInit() {
    this.quote = new Quote
    this.quote.score = 0
    this.quoteArray=[]
  }
pushQuote(){
  this.quoteArray.push(this.quote)
  this.quote = new Quote
  this.quote.score = 0
}
invoke(event){
  console.log(event)
  if(event.method == 'up'){
    this.quoteArray[event.index].score +=1
  }
  if(event.method == 'down'){
    this.quoteArray[event.index].score -=1
  }
  if(event.method == 'delete'){
    this.quoteArray.splice(event.index,1)
  }
}
}
