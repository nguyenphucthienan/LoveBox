import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleName } from '../core/constant/role-name';
import { AuthRoleGuard } from '../core/guards/auth-role.guard';
import { MyUserResolver } from '../core/resolvers/my-user.resolver';
import { UserResolver } from '../core/resolvers/user.resolver';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { UserEditInfoComponent } from './components/user-edit-info/user-edit-info.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CheckSelfUserGuard } from './guards/check-self-user.guard';

const routes: Routes = [
  {
    path: 'users/me',
    component: MyProfileComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] },
    resolve: { myUser: MyUserResolver }
  },
  {
    path: 'users/search',
    component: SearchUserComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] }
  },
  {
    path: 'users/edit-info',
    component: UserEditInfoComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] },
    resolve: { myUser: MyUserResolver }
  },
  {
    path: 'users/:id',
    component: UserProfileComponent,
    canActivate: [AuthRoleGuard, CheckSelfUserGuard],
    data: { roles: [RoleName.USER] },
    resolve: {
      myUser: MyUserResolver,
      user: UserResolver
    }
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
export class UsersRoutingModule { }
