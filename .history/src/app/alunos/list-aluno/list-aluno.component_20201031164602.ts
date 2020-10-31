import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.css']
})
export class ListAlunoComponent implements OnInit {

  ngOnInit() { }

  openDialog(content: any) {
    console.log(" Dentro do list-aluno.component");
  }

  constructor( ) {  }


}
