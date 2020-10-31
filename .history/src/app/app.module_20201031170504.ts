import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalheAlunoComponent } from './alunos/detalhe-aluno/detalhe-aluno.component';
import { AddAlunoComponent } from './alunos/add-alunos/add-aluno.component';
import { EditAlunoComponent } from './alunos/edit-aluno/edit-aluno.component';
import { ListAlunoComponent } from './alunos/list-aluno/list-aluno.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatButtonModule, MatRippleModule, MatInputModule, MatSliderModule, MatIconModule, MatFormFieldControl } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddAlunoComponent,
    ListAlunoComponent,
    EditAlunoComponent,
    DetalheAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldControl
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ]
})
export class AppModule { }
