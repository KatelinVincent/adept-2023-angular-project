import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './mail/login/login.component';
import { InboxComponent } from './mail/inbox/inbox.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './mail/details/details.component';
import { MenuComponent } from './mail/menu/menu.component';
import { ComposeComponent } from './mail/compose/compose.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "mail/login",
    component: LoginComponent
  },
  {
    path: "mail",
    component: MenuComponent,
    children: [
      {
        path: 'compose',
        component: ComposeComponent
      },
      {
        path: 'inbox',
        component: InboxComponent,
        children: [
          {
            path: ":id",
            component: DetailsComponent,
          }
        ]
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
