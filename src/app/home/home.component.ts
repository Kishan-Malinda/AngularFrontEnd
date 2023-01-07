import { Component } from '@angular/core';
import { SharedApiServiceService } from '../shared-api-service.service';
import { ToastrService } from 'ngx-toastr';
import { IStudent } from '../student/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:SharedApiServiceService, private toastr: ToastrService){}  // 

  Student : IStudent[] = [];
  showResultTable : boolean = false; 
  
  submit(data:any){
    //console.log(data.value.studentId);
    this.service.getStudentById(data.value.studentId).subscribe( res =>{
      if(res.message == 'Success'){
        this.showResultTable = true;
        var student = (JSON.parse(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data))));
        this.Student = student;
      }      
    }, (err)=>{
      this.toastr.error(err.error.data.message,'Error',{
         positionClass: 'toast-bottom-center'
      });
    });
    
    data.reset();
  }
}
