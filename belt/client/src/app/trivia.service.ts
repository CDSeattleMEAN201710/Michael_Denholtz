import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class TriviaService {
  questionFlag:Boolean

  constructor(private _http:Http) { }
  
  addQuestion(question){
    return this._http.post('/addquestion',question).map(data=>data.json()).toPromise()
  }
  getQuestions(){
    return this._http.get('/getquestions').map(data=>data.json()).toPromise()
  }
  checkSession(){
    return this._http.get('/checksession').map(data=>data.json()).toPromise()
  }
  setName(username){
    return this._http.post('/setname',username).map(data=>data.json()).toPromise()
  }
  grade(score){
    console.log(score)
    return this._http.post('/grade',score).map(data=>data.json()).toPromise()
  }
  getGames(){
    return this._http.get('/getgames').map(data=>data.json()).toPromise()
  }

}
