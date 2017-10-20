import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Question } from './../question'
import { FormsModule } from '@angular/forms'
import { RadioControlValueAccessor } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  allQuestions:Array<Question>
  testQuestions:Array<Question>
  test:Object


  constructor(private _triviaService:TriviaService, private _router:Router) { }

  ngOnInit() {
    this.checkSession()
    this.getQuestions()
    this.test ={}
  }
  getQuestions(){
    this.testQuestions = []
    this._triviaService.getQuestions()
      .then(results => {
        this.allQuestions = results
        for(let i = 0; i < 3; i++){
          let temp = Math.floor(Math.random() * this.allQuestions.length)
          this.testQuestions.push(this.allQuestions[temp])
          this.allQuestions.splice(temp,1)
        }
      })
      .catch(err => console.log('getQuestions err',err))
  }
  grade(){
    let score = 0
    for(let value in this.test){
      if(this.test[value] == '1'){
        score ++
      }
    }
    this._triviaService.grade({score:score})
      .then(()=>this._router.navigate(['']))
      .catch(err =>{
        alert('please try again')
      })
  }
  checkSession(){
    this._triviaService.checkSession()
      .then()
      .catch(() => {
        this._router.navigate([''])
    
    })
  }

}
