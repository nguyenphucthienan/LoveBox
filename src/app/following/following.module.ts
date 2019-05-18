import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FollowingRoutingModule } from './following-routing.module';
import { FollowingComponent } from './following.component';

@NgModule({
  declarations: [
    FollowingComponent
  ],
  imports: [
    SharedModule,
    FollowingRoutingModule
  ]
})
export class FollowingModule { }
