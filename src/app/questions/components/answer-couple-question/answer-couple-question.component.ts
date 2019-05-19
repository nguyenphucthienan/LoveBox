import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoupleQuestion } from 'src/app/core/models/couple-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { CoupleQuestionService } from 'src/app/core/services/couple-question.service';

@Component({
  selector: 'app-answer-couple-question',
  templateUrl: './answer-couple-question.component.html',
  styleUrls: ['./answer-couple-question.component.scss']
})
export class AnswerCoupleQuestionComponent implements OnInit {

  answerForm: FormGroup;
  user: User;
  coupleQuestion: CoupleQuestion;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private coupleQuestionService: CoupleQuestionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.coupleQuestion = data.coupleQuestion;
    });

    this.answerForm = this.fb.group({
      answerText: ['', [Validators.required, Validators.maxLength(2000)]]
    });
  }

  getAnswerTextLength() {
    return this.answerForm.controls.answerText.value
      && 2000 - this.answerForm.controls.answerText.value.length
      || 2000;
  }

  answerQuestion() {
    this.coupleQuestionService.answerCoupleQuestion(
      this.user.id,
      this.coupleQuestion.id,
      this.answerForm.controls.answerText.value
    ).subscribe(coupleQuestion => {
      this.answerForm.reset();
      this.alertService.success('Answer question successfully');
      this.router.navigate(['/questions']);
    });
  }

}
