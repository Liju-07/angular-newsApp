import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsAppComponent } from './news-app/news-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:NewsAppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsAppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
