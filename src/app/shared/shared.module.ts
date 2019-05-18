import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { BriefDetailUserCardComponent } from './components/brief-detail-user-card/brief-detail-user-card.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { UserProfileOverviewComponent } from './components/user-profile-overview/user-profile-overview.component';

@NgModule({
  declarations: [
    UserProfileOverviewComponent,
    QuestionCardComponent,
    BriefDetailUserCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    InfiniteScrollModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot().ngModule,
    MatTabsModule,
    InfiniteScrollModule,
    UserProfileOverviewComponent,
    QuestionCardComponent,
    BriefDetailUserCardComponent
  ]
})
export class SharedModule { }
