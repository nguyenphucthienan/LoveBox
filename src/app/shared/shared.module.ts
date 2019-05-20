import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileUploadModule } from 'ng2-file-upload';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { BriefDetailUserCardComponent } from './components/brief-detail-user-card/brief-detail-user-card.component';
import { CoupleQuestionCardComponent } from './components/couple-question-card/couple-question-card.component';
import { PhotoUploaderComponent } from './components/photo-uploader/photo-uploader.component';
import { PhotoViewUploadModalComponent } from './components/photo-view-upload-modal/photo-view-upload-modal.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { UserProfileOverviewComponent } from './components/user-profile-overview/user-profile-overview.component';

@NgModule({
  declarations: [
    UserProfileOverviewComponent,
    QuestionCardComponent,
    BriefDetailUserCardComponent,
    CoupleQuestionCardComponent,
    PhotoUploaderComponent,
    PhotoViewUploadModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    InfiniteScrollModule,
    FileUploadModule
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
    CoupleQuestionCardComponent,
    BriefDetailUserCardComponent,
    PhotoUploaderComponent,
    PhotoViewUploadModalComponent
  ],
  entryComponents: [
    PhotoViewUploadModalComponent
  ]
})
export class SharedModule { }
