import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RadioControlValueAccessor } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { ScorelistComponent } from './scorelist/scorelist.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { FilterPipe } from './filter.pipe';
import { TriviaService } from './trivia.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    ScorelistComponent,
    NewquestionComponent,
    FilterPipe,
 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
