import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NotesService } from './../notes.service'
import { Note } from './../note'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  note:Note
  notes


  constructor(private _noteService:NotesService) { }

  ngOnInit() {
    this.note = new Note
    this.localGetNotes()
  }
  
  createNote(){
    this._noteService.create(this.note)
    this.note = new Note
    this.localGetNotes()
  }
  localGetNotes(){
    this._noteService.getNotes().then(notes => this.notes=notes).catch(err => console.log('get all notes error',err))
  }

}
