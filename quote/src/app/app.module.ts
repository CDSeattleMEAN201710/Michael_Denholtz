import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { QuotelistComponent } from './quoteform/quotelist/quotelist.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteformComponent,
    QuotelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
