import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
