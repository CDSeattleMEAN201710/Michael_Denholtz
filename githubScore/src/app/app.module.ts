import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { GhsComponent } from './ghs/ghs.component';
import { ScoreService} from './score.service'
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    GhsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
