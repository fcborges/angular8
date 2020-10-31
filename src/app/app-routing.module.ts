import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheAlunoComponent } from './alunos/detalhe-aluno/detalhe-aluno.component';
import { ListAlunoComponent } from './alunos/list-aluno/list-aluno.component';
import { AddAlunoComponent } from './alunos/add-alunos/add-aluno.component';


const routes: Routes = [
  { path: 'list-aluno', component: ListAlunoComponent },
  { path: 'detalhe-aluno' , component: DetalheAlunoComponent },
  { path: 'add-aluno' , component: AddAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
