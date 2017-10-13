import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {ScoreService} from './../score.service'

@Component({
  selector: 'app-ghs',
  templateUrl: './ghs.component.html',
  styleUrls: ['./ghs.component.css']
})
export class GhsComponent implements OnInit {
  score:number

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
    this.score = 0
  }
  getScore(username){
    this._scoreService.getScore(username)
    console.log(this._scoreService.gitHubUser)
    // this.score = this._scoreService.gitHubUser.public_repos + this._scoreService.gitHubUser.followers
  }



}
