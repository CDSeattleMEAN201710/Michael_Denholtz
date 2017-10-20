import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { ScorelistComponent } from './scorelist/scorelist.component';
import { NewquestionComponent } from './newquestion/newquestion.component';

const routes: Routes = [
  {path:'play',component:PlayComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'scorelist',component:ScorelistComponent},
    {path:'newquestion',component:NewquestionComponent}
  ]},
  {path:'**',redirectTo:'home/scorelist'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
