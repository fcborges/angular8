import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheAlunoComponent } from './alunos/detalhe-aluno/detalhe-aluno.component';
import { ListAlunoComponent } from './alunos/list-aluno/list-aluno.component';
import { AddAlunoComponent } from './alunos/add-alunos/add-aluno.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'list-aluno', component: ListAlunoComponent },
  { path: 'detalhe-aluno' , component: DetalheAlunoComponent },
  { path: 'add-aluno' , component: AddAlunoComponent },
  { path: 'home' , component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
