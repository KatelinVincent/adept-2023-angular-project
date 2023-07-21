import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteHeaderComponent } from './site-header/site-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './mail/login/login.component';
import { InboxComponent } from './mail/inbox/inbox.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './mail/details/details.component';
import { ComposeComponent } from './mail/compose/compose.component';
import { MenuComponent } from './mail/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    LoginComponent,
    InboxComponent,
    HomeComponent,
    DetailsComponent,
    ComposeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatFormFieldModule,
    ReactiveFormsModule, 
    MatInputModule, 
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
