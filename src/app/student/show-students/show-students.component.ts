import { Component, OnInit } from '@angular/core';
import { SharedApiServiceService } from 'src/app/shared-api-service.service';
import { IStudent } from '../student';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit{

  constructor(private service:SharedApiServiceService,private toastr: ToastrService ) { }

  StudentList:IStudent[]=[]; 
  responseObj : any ={} ;
  addStudent : boolean = false;
  getSingleStudentOption : boolean = false;

  ModelTitle : string="";
  ActivateAddEditStudent : boolean = false;
  student : any;
        
  ngOnInit(): void {  // this is the First Function which invoked when rendering this component
    this.getStudentList();
  }

getStudentList(){
    this.service.getStudentList().
    subscribe( data =>{
      var obj = JSON.parse(JSON.stringify(data));
      var obj2 = JSON.parse(JSON.stringify(obj.data));
      var obj3 = JSON.parse(obj2);
      
      this.StudentList = obj3;
      console.log(this.StudentList);
      
    })
  }

  getConfirm(){
    alert('Do you Really want to Delete this Record : ? ');
  }

  addClick(){
    this.student = {
      studentID:"",
      fName:"",
      lName:"",
      dob: "",
      address:""
    }
    this.ModelTitle="Add Student";
    this.ActivateAddEditStudent=true ;
  }

  editClick(student:IStudent){
    this.student = student;
    this.ModelTitle = "Edit Student Details";
    this.ActivateAddEditStudent = true
  }

  closeClick(){
    this.ActivateAddEditStudent=false;
    this.getStudentList();
  }
  
  deleteClicked(val:any){
    this.getConfirm();
    this.service.deleteStudent(val).subscribe(result=>{
      this.responseObj = result;
      console.log(this.responseObj.message);
      if(this.responseObj.message === "Success"){
        this.toastr.error("Student Deleted","Message");
      }
      this.getStudentList();
    });

  }
  
  
}
