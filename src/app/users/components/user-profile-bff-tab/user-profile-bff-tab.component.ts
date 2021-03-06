import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { CoupleQuestion } from 'src/app/core/models/couple-question.interface';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { BffRequestService } from 'src/app/core/services/bff-request.service';
import { CoupleQuestionService } from 'src/app/core/services/couple-question.service';

@Component({
  selector: 'app-user-profile-bff-tab',
  templateUrl: './user-profile-bff-tab.component.html',
  styleUrls: ['./user-profile-bff-tab.component.scss']
})
export class UserProfileBffTabComponent implements OnInit, OnChanges {

  @Input() myUser: User;
  @Input() user: User;

  loading = true;
  existSentRequest: BffRequest;
  requestForm: FormGroup;
  askForm: FormGroup;

  coupleQuestions: CoupleQuestion[] = [];
  pagination: Pagination;

  constructor(
    private fb: FormBuilder,
    private bffRequestService: BffRequestService,
    private coupleQuestionService: CoupleQuestionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.requestForm = this.fb.group({
      text: ['', [Validators.required, Validators.maxLength(200)]]
    });

    this.askForm = this.fb.group({
      questionText: ['', [Validators.required, Validators.maxLength(200)]]
    });

    if (!this.user.bffDetail) {
      this.getExistBffRequest();
    }
  }

  ngOnChanges() {
    if (this.user) {
      this.coupleQuestionService.getCoupleQuestions(this.user.id, true)
        .subscribe((result: any) => {
          this.coupleQuestions = result.content;
          this.pagination = result.pagination;
        });
    }
  }

  getExistBffRequest() {
    this.bffRequestService.getExistBffRequest(this.myUser.id, this.user.id)
      .subscribe(
        bffRequest => {
          this.existSentRequest = bffRequest;
          this.loading = false;
        },
        error => {
          this.existSentRequest = null;
          this.loading = false;
        });
  }

  getRequestTextLength() {
    return this.requestForm.controls.text.value
      && 200 - this.requestForm.controls.text.value.length
      || 200;
  }

  getQuestionTextLength() {
    return this.askForm.controls.questionText.value
      && 200 - this.askForm.controls.questionText.value.length
      || 200;
  }

  sendRequest() {
    this.bffRequestService.createBffRequest(
      this.user.id,
      this.requestForm.controls.text.value
    ).subscribe(
      bffRequest => {
        this.alertService.success('Send BFF request successfully');
        this.requestForm.reset();
        this.getExistBffRequest();
      },
      error => this.alertService.error('Send BFF request failed'));
  }

  sendQuestion() {
    this.coupleQuestionService.createCoupleQuestion(
      this.user.id,
      this.askForm.controls.questionText.value
    ).subscribe(question => {
      this.alertService.success('Ask question successfully');
      this.askForm.reset();
    });
  }

  onScrollDown() {
    if (this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.coupleQuestionService.getCoupleQuestions(this.user.id, true, this.pagination)
        .subscribe((result: any) => {
          this.coupleQuestions = [...this.coupleQuestions, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
