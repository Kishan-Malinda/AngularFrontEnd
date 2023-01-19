import { Component } from '@angular/core';
import { SharedApiServiceService } from '../../services/shared-api-service.service';
import { ToastrService } from 'ngx-toastr';
import { IStudent } from '../../models/student';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  Student : IStudent[] = [];
  showResultTable : boolean = false; 
  
  constructor(private service:SharedApiServiceService, private toastr: ToastrService){}
  submit(data:any){
    //console.log(data.value.studentId);
    this.service.getStudentById(data.value.studentId).subscribe( res =>{
      if(res.message == 'Success'){
        this.showResultTable = true;
        var student = (JSON.parse(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data))));
        this.Student = student;
      }      
    }, (err)=>{
      this.showResultTable = false;
      this.Student = [];
      this.toastr.error(err.error.data.message,'Error',{
         positionClass: 'toast-top-right'
      });
    });
    
    data.reset();
  }
}
