import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Component({
  selector: 'app-user-questions-answer-question',
  templateUrl: './user-questions-answer-question.component.html',
  styleUrls: ['./user-questions-answer-question.component.scss']
})
export class UserQuestionsAnswerQuestionComponent implements OnInit {

  answerForm: FormGroup;
  user: User;
  singleQuestion: SingleQuestion;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private singleQuestionService: SingleQuestionService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.singleQuestion = data.singleQuestion;
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
    this.singleQuestionService.answerSingleQuestion(
      this.user.id,
      this.singleQuestion.id,
      this.answerForm.controls.answerText.value
    ).subscribe(singleQuestion => {
      this.answerForm.reset();
      this.alertService.success('Answer question successfully');
      this.router.navigate(['/questions']);
    });
  }

}
