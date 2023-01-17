import { Component, OnInit, ViewChild} from '@angular/core';
import { SharedApiServiceService } from 'src/app/services/shared-api-service.service';
import { IStudent } from '../../../models/student';
import { ToastrService } from 'ngx-toastr';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit{

  StudentList:IStudent[]=[]; 
  responseObj : any ={} ;
  addStudent : boolean = false;
  getSingleStudentOption : boolean = false;

  ModelTitle : string="";
  ActivateAddEditStudent : boolean = false;
  student : any;
  isUpdate : boolean =false;

  // For Material Table
  displayedColumns: string[] = ['studentID', 'fName', 'lName', 'dob','address','Options'];
  dataSource !: MatTableDataSource<any> ; 
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service:SharedApiServiceService,private toastr: ToastrService ) { }

  ngOnInit(): void {  // this is the First Function which invoked when rendering this component
    this.getStudentList();
  }

getStudentList(){
    this.service.getStudentList().
    subscribe( {
      next : (data) => {
        var obj = JSON.parse(JSON.stringify(data));
        var obj2 = JSON.parse(JSON.stringify(obj.data));
        var obj3 = JSON.parse(obj2);
        console.log(obj3);
        this.dataSource = new MatTableDataSource(obj3);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error : (err) =>{
        this.toastr.error("Error Occured","Message");
      }
    })
  }

  getConfirm(){
    alert('Do you Really want to Delete this Record : ? ');
  }

  addClick(isUpdate :boolean){
    this.student = {
      studentID:"",
      fName:"",
      lName:"",
      dob: "",
      address:""
    }
    this.isUpdate = isUpdate;
    this.ModelTitle="Add Student";
    this.ActivateAddEditStudent=true ;
  }

  editClick(student:IStudent, isUpdate :boolean ){
    this.student = student;
    this.isUpdate = isUpdate;
    this.ModelTitle = "Edit Student Details";
    this.ActivateAddEditStudent = true
  }

  closeClick(){
    this.ActivateAddEditStudent=false;
    this.getStudentList();
  }
  
  deleteClicked(val:any){
    this.getConfirm();
    this.service.deleteStudent(val).subscribe({
      next: (result) =>{
        this.responseObj = result;
        console.log(this.responseObj.message);
        if(this.responseObj.message === "Success"){
          this.toastr.error("Student Deleted","Message");
        }
        this.getStudentList();
      },
      error : (err) =>{
        this.toastr.error("Error Occured","Message");
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
