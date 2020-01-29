import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Login
import { LoginComponent } from './public/login/login.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
