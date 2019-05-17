import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoleGuard } from '../core/guards/auth-role.guard';
import { MyUserResolver } from '../core/resolvers/my-user.resolver';
import { UserFollowingComponent } from './components/user-following/user-following.component';

const routes: Routes = [
  {
    path: 'following',
    component: UserFollowingComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
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
export class UserRoutingModule { }
