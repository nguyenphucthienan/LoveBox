import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  PhotoViewUploadModalComponent,
} from 'src/app/shared/components/photo-view-upload-modal/photo-view-upload-modal.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-edit-info',
  templateUrl: './user-edit-info.component.html',
  styleUrls: ['./user-edit-info.component.scss']
})
export class UserEditInfoComponent implements OnInit {

  private readonly uploadUserPhotoUrl = `${environment.apiUrl}/auth/me/photo`;
  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  myUser: User;
  updateInfoForm: FormGroup;
  changePasswordForm: FormGroup;

  modalRef: MDBModalRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: MDBModalService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.updateInfoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.changePasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    }, { validator: [this.passwordMatchValidator] });

    this.route.data.subscribe(data => {
      this.myUser = data.myUser;
      this.updateInfoForm.patchValue({
        email: this.myUser.email,
        firstName: this.myUser.firstName,
        lastName: this.myUser.lastName
      });
    });
  }

  openUploadPhotoModal() {
    this.modalRef = this.modalService.show(PhotoViewUploadModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: true,
      class: 'modal-md modal-dialog-centered',
      containerClass: 'top',
      animated: true,
      data: {
        title: 'Hotel Photo',
        uploadUrl: this.uploadUserPhotoUrl,
        photoUrl: this.myUser.photo && this.myUser.photo.url
      }
    });
  }

  updateInfo() {
    this.authService.updateUserInfo(this.updateInfoForm.value)
      .subscribe(
        () => this.alertService.success('Update user info successfully'),
        error => this.alertService.error('Update user info failed')
      );
  }

  changePassword() {
    this.authService.changeUserPassword(this.changePasswordForm.value)
      .subscribe(
        () => {
          this.authService.logout();
          this.router.navigate(['/login']);
          this.alertService.success('Change password successfully. Please login again');
        },
        error => this.alertService.error('Change password failed')
      );
  }

  private passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword').value === g.get('confirmNewPassword').value
      ? null
      : { passwordMatch: true };
  }

  updateInfoFormControlHasError(controlName: string, errorName: string): boolean {
    return this.updateInfoForm.get(controlName).touched
      && this.updateInfoForm.get(controlName).hasError(errorName);
  }

  changePasswordFormControlHasError(controlName: string, errorName: string): boolean {
    return this.changePasswordForm.get(controlName).touched
      && this.changePasswordForm.get(controlName).hasError(errorName);
  }

}
