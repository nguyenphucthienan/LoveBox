import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleName } from '../core/constant/role-name';
import { AuthRoleGuard } from '../core/guards/auth-role.guard';
import { MyUserResolver } from '../core/resolvers/my-user.resolver';
import { FollowingComponent } from './following.component';

const routes: Routes = [
  {
    path: 'following',
    component: FollowingComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] },
    resolve: { user: MyUserResolver }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FollowingRoutingModule { }
