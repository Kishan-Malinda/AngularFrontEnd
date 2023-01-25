import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-lecturer-operations',
  templateUrl: './lecturer-operations.component.html',
  styleUrls: ['./lecturer-operations.component.css']
})
export class LecturerOperationsComponent implements OnInit {
  lecturerForm !: FormGroup
  constructor(){}
  ngOnInit(): void {
    this.lecturerForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl()
    });
  }
  onSubmit():void {
    console.log(this.lecturerForm);
  }
}
