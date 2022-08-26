import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoveSiamoComponent} from './dove-siamo/dove-siamo.component';
import {ContattaciComponent} from './contattaci/contattaci.component';
import {PizzeComponent} from './pizze/pizze.component';

const routes: Routes = [{path: '', component: PizzeComponent}, {path: 'dove-siamo', component: DoveSiamoComponent}, {path: 'contattaci', component: ContattaciComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
