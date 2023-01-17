import { Injectable } from '@angular/core';
import { IStudent } from '../models/student';

//import HttpClient
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'; // for handling async request and responses

//import Environments
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedApiServiceService {

  constructor(private http : HttpClient) { }

  getStudentList(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(environment.APIURL+'/SelectAll');
  }
  getStudentById(val:any): Observable<any>{
    return this.http.get<any>(environment.APIURL+'/Select/?StudentID='+val);
  }
  addStudent(val:any){
    return this.http.post(environment.APIURL+'/Insert/',val);
  }
  deleteStudent(val:any){
    //http://localhost:7172/api/SampleProject/Student/Delete?StudentID=
    return this.http.delete(environment.APIURL+'/Delete/?StudentID='+val);
  }
  updateStudent(val:any){
    return this.http.put(environment.APIURL+'/Update/',val);
  }
}
