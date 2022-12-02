import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PhonesComponent } from './phones/phones.component';
import { PhonesDetailComponent } from './phones-detail/phones-detail.component';
import { PhonesSearchComponent } from './phones-search/phones-search.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import {HomeComponent} from "./home/home.component"
import { UserGuardGuard } from './user-guard.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'phones',component: PhonesComponent,
  canActivate: [UserGuardGuard]},
  {path: 'detail/:id', component: PhonesDetailComponent},
  {path: 'search', component: PhonesSearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: '**', component:CustomErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
