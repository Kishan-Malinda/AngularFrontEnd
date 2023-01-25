import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { StudentOperationsComponent } from './components/student-operations/student-operations.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LecturerOperationsComponent } from './components/lecturer-operations/lecturer-operations.component';

const routes: Routes = [
  {path:'student',component:StudentOperationsComponent},
  {path:'',component: HomeComponent},
  {path:'search', component:SearchComponent},
  {path: 'lecturer',component:LecturerOperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
