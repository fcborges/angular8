import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.css']
})
export class ListAlunoComponent implements OnInit {

  ngOnInit() { }

  constructor( private router: Router ) {  }

  open(){
    this.router.navigate(['/list-prestador']);
  }

}
