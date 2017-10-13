import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {
  gitHubUser
  score

  constructor(private _http: Http) { }
  getScore(username){
      return this._http.get(`https://api.github.com/users/${username}`).subscribe(
      response => {this.gitHubUser = response.json();this.score=this.gitHubUser.public_repos + this.gitHubUser.followers},
      error => {console.log("Errors, breh")}
    )
  }

}
