import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-driver', component: RegisterDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
