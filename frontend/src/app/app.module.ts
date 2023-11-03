import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { RegisterComponent } from './register/register.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidateMsgDirective } from './register/form-validate-msg.directive';
import { PasswordMaskPipe } from './password-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    FormValidateMsgDirective,
    PasswordMaskPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
