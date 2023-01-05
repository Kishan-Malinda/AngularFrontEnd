import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
