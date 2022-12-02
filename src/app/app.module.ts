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
import { RegisterComponent } from './register/register.component';
import { CoresListComponent } from './cores-list/cores-list.component';
import { CreateCoreComponent } from './create-core/create-core.component';
import { UpdateCoreComponent } from './update-core/update-core.component';
import { CoresFormComponent } from './cores-form/cores-form.component';
import { CreatePhoneComponent } from './create-phone/create-phone.component';
import { AccessoriesListComponent } from './accessories-list/accessories-list.component';
import { CreateAccessoryComponent } from './create-accessory/create-accessory.component';
import { UpdateAccessoryComponent } from './update-accessory/update-accessory.component';
import { AccessoriesFormComponent } from './accessories-form/accessories-form.component'


@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    PhonesDetailComponent,
    PhonesSearchComponent,
    LoginComponent,
    CustomErrorComponent,
    HomeComponent,
    RegisterComponent,
    CoresListComponent,
    CreateCoreComponent,
    UpdateCoreComponent,
    CoresFormComponent,
    CreatePhoneComponent,
    AccessoriesListComponent,
    CreateAccessoryComponent,
    UpdateAccessoryComponent,
    AccessoriesFormComponent
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
