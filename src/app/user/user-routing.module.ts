import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoleGuard } from '../core/guards/auth-role.guard';
import { MyUserResolver } from '../core/resolvers/my-user.resolver';
import { UserResolver } from '../core/resolvers/user.resolver';
import { UserFollowingComponent } from './components/user-following/user-following.component';
import { UserMeComponent } from './components/user-me/user-me.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'users/me',
    component: UserMeComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { myUser: MyUserResolver }
  },
  {
    path: 'users/:id',
    component: UserProfileComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: {
      myUser: MyUserResolver,
      user: UserResolver
    }
  },
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
