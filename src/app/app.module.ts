import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviesComponent } from './dashboard/movies/view/view-movies.component';
import { AddMoviesComponent } from './dashboard/movies/add/add-movies/add-movies.component';
import { EditMoviesComponent } from './dashboard/movies/edit/edit-movies/edit-movies.component';

import { NavbarComponent } from './dashboard/layouts/navbar/navbar.component';
import { MoviesModule } from './dashboard/movies/view/view-movies.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    AddMoviesComponent,
    EditMoviesComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MoviesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
