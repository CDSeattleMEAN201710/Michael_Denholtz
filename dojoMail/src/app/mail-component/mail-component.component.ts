import { Component, OnInit } from '@angular/core';
import {Mail} from './mail'

@Component({
  selector: 'app-mail-component',
  templateUrl: './mail-component.component.html',
  styleUrls: ['./mail-component.component.css']
})
export class MailComponentComponent implements OnInit {
  mails: Array<Mail>

  constructor() { }

  ngOnInit() {
    this.mails = [
      {    
        sender: 'Mike',
        importance: true,
        subject: 'Angular',
        content : 'Is great',

      },
      {    
        sender: 'Amber',
        importance: true,
        subject: 'TWD',
        content : 'Disappointing',

      },
      {    
        sender: 'Laurie',
        importance: false,
        subject: 'Dead Mouse',
        content : 'Still dead',

      },
      {    
        sender: 'Matt' ,
        importance: false ,
        subject: 'Kerbal',
        content : 'Is the best',

      },
      {    
        sender: 'Landlord',
        importance: false,
        subject: 'Rent',
        content : 'Is due',

      },

    ]
  }

}
