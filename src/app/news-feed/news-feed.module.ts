import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  NewsFeedCoupleQuestionListComponent,
} from './components/news-feed-couple-question-list/news-feed-couple-question-list.component';
import { NewsFeedQuestionListComponent } from './components/news-feed-question-list/news-feed-question-list.component';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { NewsFeedComponent } from './news-feed.component';

@NgModule({
  declarations: [
    NewsFeedComponent,
    NewsFeedQuestionListComponent,
    NewsFeedCoupleQuestionListComponent
  ],
  imports: [
    SharedModule,
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule { }
