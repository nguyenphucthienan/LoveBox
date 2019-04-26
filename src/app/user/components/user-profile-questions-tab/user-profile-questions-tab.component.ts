import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-user-profile-questions-tab',
  templateUrl: './user-profile-questions-tab.component.html',
  styleUrls: ['./user-profile-questions-tab.component.scss']
})
export class UserProfileQuestionsTabComponent implements OnInit {

  @Input() user: User;

  askForm: FormGroup;
  singleQuestions: SingleQuestion[];
  pagination: Pagination;

  constructor(
    private fb: FormBuilder,
    private singleQuestionService: SingleQuestionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.askForm = this.fb.group({
      questionText: ['', [Validators.required, Validators.maxLength(200)]]
    });

    this.singleQuestionService.getSingleQuestions(this.user.id, true)
      .subscribe((result: any) => {
        this.singleQuestions = result.content;
        this.pagination = result.pagination;
      });
  }

  onScrollDown() {
    if (this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.singleQuestionService.getSingleQuestions(this.user.id, true, this.pagination)
        .subscribe((result: any) => {
          this.singleQuestions = [...this.singleQuestions, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

  getQuestionTextLength() {
    return this.askForm.controls.questionText.value
      && 200 - this.askForm.controls.questionText.value.length
      || 200;
  }

  sendQuestion() {
    this.singleQuestionService.createSingleQuestion(
      this.user.id,
      this.askForm.controls.questionText.value
    ).subscribe(question => {
      this.alertService.success('Ask question successfully');
      this.askForm.reset();
    });
  }

}
