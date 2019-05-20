import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-edit-info',
  templateUrl: './user-edit-info.component.html',
  styleUrls: ['./user-edit-info.component.scss']
})
export class UserEditInfoComponent implements OnInit {

  updateInfoForm: FormGroup;
  changePasswordForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
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
      const user = data.myUser;
      this.updateInfoForm.patchValue({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      });
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
