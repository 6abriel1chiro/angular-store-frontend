import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones.component';
import { PhonesDetailComponent } from './phones-detail/phones-detail.component';
import { PhonesSearchComponent } from './phones-search/phones-search.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    PhonesDetailComponent,
    PhonesSearchComponent,
    LoginComponent,
    CustomErrorComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
