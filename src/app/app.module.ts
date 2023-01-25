import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShowStudentsComponent } from './components/student-operations/show-students/show-students.component';
import { StudentOperationsComponent } from './components/student-operations/student-operations.component'; 
//import shared api service
import { SharedApiServiceService } from './services/shared-api-service.service';

//Register httpClient
import {HttpClientModule} from '@angular/common/http';
//Adding other required modules for Form Handling
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

//For Notifications
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditStudentComponent } from './components/student-operations/add-edit-student/add-edit-student.component';

//Typed Animations
import {NgxTypedJsModule} from 'ngx-typed-js';


//For Material Components
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SearchComponent } from './components/search/search.component';
import { LecturerOperationsComponent } from './components/lecturer-operations/lecturer-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowStudentsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AddEditStudentComponent,
    StudentOperationsComponent,
    SearchComponent,
    LecturerOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // adding imports
    FormsModule,    // For Template Driven Forms
    ReactiveFormsModule,
    ToastrModule.forRoot(), //For Notifications 
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    NgxTypedJsModule
  ],
  providers: [SharedApiServiceService], //mention shared-api-service as provider  
  bootstrap: [AppComponent]
})
export class AppModule { }
