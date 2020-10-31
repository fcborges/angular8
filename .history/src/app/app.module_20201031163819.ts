import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { DetalheAlunoComponent } from './alunos/detalhe-aluno/detalhe-aluno.component';
import { AddAlunoComponent } from './alunos/add-alunos/add-aluno.component';
import { EditAlunoComponent } from './alunos/edit-aluno/edit-aluno.component';
import { ListAlunoComponent } from './alunos/list-aluno/list-aluno.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatButtonModule, MatRippleModule, MatInputModule, MatSliderModule, MatIconModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddAlunoComponent,
    ListAlunoComponent,
    EditAlunoComponent,
    DetalheAlunoComponent,
    MenuComponent,
    HomeComponent,
    RodapeComponent
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
    MatRippleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ]
})
export class AppModule { }
