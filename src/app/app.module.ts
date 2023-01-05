import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ShowStudentsComponent } from './student/show-students/show-students.component';

//import shared api service
import { SharedApiServiceService } from './shared-api-service.service';

//Register httpClient
import {HttpClientModule} from '@angular/common/http';
//Adding other required modules for Form Handling
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

//For Notifications
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ShowStudentsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddEditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // adding imports
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), //For Notifications 
    BrowserAnimationsModule
  ],
  providers: [SharedApiServiceService], //mention shared-api-service as provider  
  bootstrap: [AppComponent]
})
export class AppModule { }
