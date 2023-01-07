import { Component,OnInit,Input } from '@angular/core';
import { SharedApiServiceService } from 'src/app/shared-api-service.service';

import { ToastrService } from 'ngx-toastr'; // For Notifications

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit{

  constructor(private service : SharedApiServiceService , private toastr: ToastrService ){}

  @Input() student:any;
  
  studentID:string="";
  fName:string="";
  lName:string="";
  dob: string="";
  address:string="";

  responseObj : any ={}

  ngOnInit():void{
    
    this.studentID = this.student.studentID;
    this.fName = this.student.fName;
    this.lName = this.student.lName;
    this.dob= this.student.dob;
    this.address = this.student.address
  }

  addStudent(){
    var st = {
      studentID: this.studentID,
      fName : this.fName,
      lName : this.lName,
      dob : this.dob,
      address : this.address
    }

    this.service.addStudent(st).subscribe(res=>{
      this.responseObj = res;
      if(this.responseObj.message == "Success"){
          this.toastr.success("Student Added Successfully","Message");
      }
    })
    this.clearData();
  }

  updateStudent(){
    var st = {
      studentID: this.studentID,
      fName : this.fName,
      lName : this.lName,
      dob : this.dob,
      address : this.address
    }

    this.service.updateStudent(st).subscribe(res=>{
      this.responseObj = res;
      if(this.responseObj.message == "Success"){
          this.toastr.success("Student Updated Successfully","Message");
      }
    })
    this.clearData();
  }

  clearData(){
    this.studentID = "";
    this.fName = "";
    this.lName = "";
    this.dob= "";
    this.address = ""
  }

}
