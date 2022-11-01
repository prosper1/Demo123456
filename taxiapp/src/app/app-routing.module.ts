import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RankDetailsComponent } from './rank-details/rank-details.component';
import { RanksComponent } from './ranks/ranks.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './taxis/list/list.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-driver', component: RegisterDriverComponent},
  {path: 'rank', component: RanksComponent},
  {path: 'rank-details/:id', component: RankDetailsComponent},
  {path: 'taxi/:id', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
