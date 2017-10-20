import { Component, OnInit } from '@angular/core';
import { TriviaService } from './../trivia.service'
import { Question } from './../question'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
  newQuestion:Question

  constructor(private _triviaService:TriviaService, private _router:Router) { }

  ngOnInit() {
    this.newQuestion = new Question
    this.checkSession()
  }
  addQuestion(){
    this._triviaService.addQuestion(this.newQuestion)
      .then(() => {
        this._triviaService.questionFlag=true
        this._router.navigate(['scorelist'])
      })
      .catch(err => console.log('addQuestion failed', err))
  }
  checkSession(){
    this._triviaService.checkSession()
      .then()
      .catch(() => {
        this._router.navigate([''])
    
    })
  }


}
