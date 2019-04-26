import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoleGuard } from '../core/guards/auth-role.guard';
import { UserMeComponent } from './components/user-me/user-me.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserQuestionsComponent } from './components/user-questions/user-questions.component';
import { MyUserResolver } from './resolvers/my-user.resolver';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: 'questions',
    component: UserQuestionsComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: MyUserResolver }
  },
  {
    path: 'profile/me',
    component: UserMeComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: MyUserResolver }
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: UserResolver }
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
