import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class NotesService {

  constructor(private _http:Http) { }
  getNotes(){
    return this._http.get('/index').map(data => data.json()).toPromise()
    }
  create(note){
    return this._http.post('/create',note).map(data => data.json()).toPromise()
  }

}
