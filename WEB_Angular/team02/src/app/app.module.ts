import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/mainpage/header/header.component';
import {HomeComponent} from './components/mainpage/home/home.component';
import {NavBarComponent} from './components/mainpage/nav-bar/nav-bar.component';
import {Overview1Component} from './components/events/overview1/overview1.component';
import {Overview2Component} from './components/events/overview2/overview2.component';
import {Detail2Component} from './components/events/detail2/detail2.component';
import {FormsModule} from '@angular/forms';
import {Overview3Component} from './components/events/overview3/overview3.component';
import {Detail3Component} from './components/events/detail3/detail3.component';
import {AEventsService} from './services/a-events.service';
import {RouterModule, Routes} from "@angular/router";
import { ErrorComponent } from './components/mainpage/error/error.component';
import { Detail4Component } from './components/events/detail4/detail4.component';
import { Overview4Component } from './components/events/overview4/overview4.component';
import {Detail5Component} from "./components/events/detail5/detail5.component";
import {Overview5Component} from "./components/events/overview5/overview5.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'events', component: null,
    children:
      [
        {path: 'overview1', component: Overview1Component},
        {path: 'overview2', component: Overview2Component},
        {path: 'overview3', component: Overview3Component},
    {path: 'overview4', component: Overview4Component,
    children: [
      {path: ':id', component: Detail4Component},
      {path: '', redirectTo: '/events/overview4/-1', pathMatch: 'full'},
      ]
        },
        {path: 'overview5', component: Overview5Component,
          children: [
            {path: ':id', component: Detail5Component},
            {path: '', redirectTo: '/events/overview5/-1', pathMatch: 'full'},
          ]
        }
      ]
  },
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavBarComponent,
    Overview1Component,
    Overview2Component,
    Detail2Component,
    Overview3Component,
    Detail3Component,
    ErrorComponent,
    Detail4Component,
    Overview4Component,
    Overview5Component,
    Detail5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpClientModule,
  ],
  providers: [AEventsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
