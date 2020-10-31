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
import { MatFormFieldModule } from '@angular/material/form-field/typings/form-field-module';
import { MatSliderModule } from '@angular/material/slider/typings/slider-module';
import { MatIconModule } from '@angular/material/icon/typings/icon-module';
import { MatButtonModule } from '@angular/material/button/typings/button-module';
import { MatInputModule } from '@angular/material/input/typings/input-module';

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
    MatButtonModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ]
})
export class AppModule { }
