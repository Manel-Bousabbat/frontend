import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { AddProfComponent } from './add-prof/add-prof.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';


const routes: Routes = [
  { path: 'signin',  component: SignInComponent},
  { path: 'dashboard',  component: DashboardComponent},
  { path: 'student',  component: StudentComponent},
  { path: 'professor',  component: ProfessorComponent},
  { path: 'addProfessor',  component: AddProfComponent},
  { path: 'addStudent',  component: AddEtudiantComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
