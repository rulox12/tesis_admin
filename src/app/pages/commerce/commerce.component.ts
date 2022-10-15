import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CommerceService} from '../../services/commerce.service';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.scss']
})

export class CommerceComponent implements OnInit {
  public baseUrlForImage = environment.api + 'commerce/getImage/';
  urlFrontend = environment.urlFrontend;

  commerce = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    nit: new FormControl(''),
    logo: new FormControl(''),
    color: new FormControl(''),
    fileSource: new FormControl(''),
  });

  public commerces;
  modalOptions: NgbModalOptions;
  closeResult: string;
  myAngularxQrCode: any;
  companyEditForm: any;

  constructor(
    private commerceService: CommerceService,
    private userService: UserService,
    private modalService: NgbModal,
    public router: Router
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  ngOnInit() {
    this.commerceService.getAllCommerce().then(data => {
      this.commerces = data;
    }, error => {
      console.log(error);
    });
  }

  openModal(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openQRModal(content, commerce) {
    this.myAngularxQrCode = this.urlFrontend + 'microsite?microsite=' + commerce.nit;
    this.openModal(content);
  }

  addCommerce() {
    const formData = new FormData();
    const file = this.commerce.get('fileSource').value;
    formData.append('logo', file, file.name);
    formData.append('name', this.commerce.get('name').value);
    formData.append('description', this.commerce.get('description').value);
    formData.append('nit', this.commerce.get('nit').value);
    formData.append('color', this.commerce.get('color').value);
    this.commerceService.addCommerce(formData).subscribe((data) => {
      this.openAlert('success', 'Perfecto', 'Comercio creado con exito');
    }, err => {
      this.openAlert('error', 'Ocurrio un error', err.message);
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.commerce.patchValue({
        fileSource: event.target.files[0]
      });
    }
  }

  private openAlert(icon: string, title: string, text: string) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    }).then(() => {
      this.modalService.dismissAll();
      this.router.navigateByUrl('/commerce').then(() => {
        window.location.reload();
      });
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  submitEditCommerce() {
    this.commerceService.updateCommerceService(this.companyEditForm).subscribe(async response => {
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Comerce editado con exito',
        }).then(() => {
          this.modalService.dismissAll();
          this.router.navigateByUrl('/commerce').then(r => {
            window.location.reload();
          });
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Error',
          text: 'Error al intentar editar el usuario',
        });
      }
    });
  }

  openUpdateModal(company, content) {
    this.companyEditForm = company;
    this.openModal(content);
  }
}
