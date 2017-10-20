import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-scorelist',
  templateUrl: './scorelist.component.html',
  styleUrls: ['./scorelist.component.css']
})
export class ScorelistComponent implements OnInit {
  user:object

  constructor(private _triviaService:TriviaService, private _router:Router) { }
  games

  ngOnInit() {
    this.getName()
    this.checkQuestion()
    this.getGames()
  }
  checkQuestion(){
    console.log(this._triviaService.questionFlag)
    if(this._triviaService.questionFlag){
      alert('Thank for you providing a new question')
      this._triviaService.questionFlag = false
    }
  }
  playPage(){
    this._router.navigate(['','play'])
  }
  getName(){
    this._triviaService.checkSession()
      .then(() => {})
      .catch(() => {
        let username = prompt("Please Enter Your Name")
        this._triviaService.setName({name:username})
      })
  }
  getGames(){
    this._triviaService.getGames()
      .then(results => {
        console.log(results)
        this.games=results
      })
      .catch(err =>console.log(err))
  }

}
