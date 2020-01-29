import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Modules
import { AppRoutingModule } from './app-routing.module';
//Handlres Global services
import { ResponsiveService } from './utils/responsive/responsive.service';
import { RequestService } from './request/request.service';
import { NotificationService } from './common/notification/notification.service';
import { ModalService } from './common/modal/modal.service';
import { SessionService } from './utils/session/session.service';
import { AuthService } from './public/auth/auth.service';
import { ValidateService } from './utils/validate/validate.service';
//Access Guard
import { AccessGuard } from './utils/access/access.guard';
//Global Components
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ValidateComponent } from './utils/validate/validate.component';
import { ModalComponent } from './common/modal/modal.component';
import { NotificationComponent } from './common/notification/notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidateComponent,
    ModalComponent,
    NotificationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ResponsiveService,
    AccessGuard,
    SessionService,
    RequestService,
    NotificationService,
    ModalService,
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
