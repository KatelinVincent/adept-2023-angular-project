import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './mail/login/login.component';
import { InboxComponent } from './mail/inbox/inbox.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'mail/login',
    component: LoginComponent
  },
  {
    path: 'mail/inbox',
    component: InboxComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
