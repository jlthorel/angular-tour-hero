import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';

import { TablemodModule } from './tablemod/tablemod.module';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HomeComponent,
    NavbarComponent,
    NavbarComponent,
    UsersComponent,
    TablePaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TablemodModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
