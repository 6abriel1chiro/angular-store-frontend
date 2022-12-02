import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PhonesComponent } from './phones/phones.component';
import { CreatePhoneComponent } from './create-phone/create-phone.component';
import { PhonesDetailComponent } from './phones-detail/phones-detail.component';
import { PhonesSearchComponent } from './phones-search/phones-search.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import {HomeComponent} from "./home/home.component"
import { UserGuardGuard } from './user-guard.guard';
import { CoresListComponent } from './cores-list/cores-list.component';
import { UpdateCoreComponent } from './update-core/update-core.component';
import { CreateCoreComponent } from './create-core/create-core.component';


import { AccessoriesListComponent } from './accessories-list/accessories-list.component';
import { AccessoriesFormComponent } from './accessories-form/accessories-form.component';
import { UpdateAccessoryComponent } from './update-accessory/update-accessory.component';
import { CreateAccessoryComponent } from './create-accessory/create-accessory.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'phones',component: PhonesComponent},
  { path: 'corelist', component: CoresListComponent },
  { path: 'editcore/:id', component: UpdateCoreComponent,
  canActivate: [UserGuardGuard]},
  { path: 'createcore', component: CreateCoreComponent,
  canActivate: [UserGuardGuard]}, 
  {path: 'detail/:id', component: PhonesDetailComponent},
  {path: 'search', component: PhonesSearchComponent},
  { path: 'createphone', component: CreatePhoneComponent,
  canActivate: [UserGuardGuard]}, 
  {path: 'accessories', component:AccessoriesListComponent},
  {path: 'editacc/:id', component: UpdateAccessoryComponent,
  canActivate:[UserGuardGuard]},
  {path: 'createacc', component: CreateAccessoryComponent,
  canActivate:[UserGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: '**', component:CustomErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
