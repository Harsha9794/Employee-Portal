import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatNativeDateModule, MatIconModule, MatListModule ,
  MatCardModule, MatDatepickerModule, MatSelectModule, MatInputModule} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { LoggerService } from './logger.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    RegistrationComponent,
    ListEmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [DatePipe, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
