import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { StudentOperationsComponent } from './components/student-operations/student-operations.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'student',component:StudentOperationsComponent},
  {path:'',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
