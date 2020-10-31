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

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;

  constructor(
    private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
  }

  open() {
   /*  const modalRef = this.modalService.open(ModalAlunoComponent, { size: 'lg' });
    modalRef.componentInstance.my_modal_title = 'Solicitar Novo Aluno';
    this.modalOptions.windowClass = 'custom-class'; */

  }

  linhaSelecionada() {

  }

}
