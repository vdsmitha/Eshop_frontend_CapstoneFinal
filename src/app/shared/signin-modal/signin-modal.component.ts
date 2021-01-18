import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.scss']
})
export class SigninModalComponent implements OnInit {
  name = 'Angular';
  modalRef:BsModalRef | null;
  modalRef2:BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openFirstModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  openModalSecond(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'modal-lg' });
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
  
    this.modalRef.hide();
    this.modalRef = null;
  }
  
  closeModal(){
      this.modalRef2.hide();
  }
}
