import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignOnComponent} from "./components/mainpage/sign-on/sign-on.component";

const routes: Routes = [
  {path: 'login', component: SignOnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
