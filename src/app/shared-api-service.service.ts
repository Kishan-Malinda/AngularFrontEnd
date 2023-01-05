import { Injectable } from '@angular/core';
import { IStudent } from './student/student';

//import HttpClient
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'; // for handling async request and responses

@Injectable({
  providedIn: 'root'
})
export class SharedApiServiceService {

  readonly APIURL = "http://localhost:7172/api/SampleProject/Student";

  constructor(private http : HttpClient) { }

  getStudentList(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.APIURL+'/SelectAll');
  }
  getStudentById(val:any): Observable<any>{
    return this.http.get<any>(this.APIURL+'/Select/'+val);
  }
  addStudent(val:any){
    return this.http.post(this.APIURL+'/Insert/',val);
  }
  deleteStudent(val:any){
    //http://localhost:7172/api/SampleProject/Student/Delete?StudentID=
    return this.http.delete(this.APIURL+'/Delete/?StudentID='+val);
  }
  updateStudent(val:any){
    return this.http.put(this.APIURL+'/Update/',val);
  }
}
