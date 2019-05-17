import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FollowingRoutingModule } from './following-routing.module';
import { FollowingComponent } from './following.component';
import { FollowingUserCardComponent } from './components/following-user-card/following-user-card.component';

@NgModule({
  declarations: [
    FollowingComponent,
    FollowingUserCardComponent
  ],
  imports: [
    SharedModule,
    FollowingRoutingModule
  ]
})
export class FollowingModule { }
