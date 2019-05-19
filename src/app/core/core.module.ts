import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { ProgressAnimationType, ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

import { SharedModule } from '../shared/shared.module';
import { AuthRoleGuard } from './guards/auth-role.guard';
import { MyUserResolver } from './resolvers/my-user.resolver';
import { SingleQuestionResolver } from './resolvers/single-question.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { BffRequestService } from './services/bff-request.service';
import { CoupleQuestionService } from './services/couple-question.service';
import { SingleQuestionService } from './services/single-question.service';
import { UserService } from './services/user.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

const jwtOptions = {
  config: {
    tokenGetter,
    whitelistedDomains: environment.whitelistedDomains,
    blacklistedRoutes: environment.blacklistedRoutes
  }
};

const toastrOptions = {
  timeOut: 5000,
  positionClass: 'toast-bottom-right',
  progressBar: true,
  progressAnimation: 'increasing' as ProgressAnimationType
};

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([]),
    BrowserAnimationsModule,
    JwtModule.forRoot(jwtOptions),
    ToastrModule.forRoot(toastrOptions),
    SharedModule
  ],
  providers: [
    AuthService,
    AuthRoleGuard,
    AlertService,
    UserService,
    SingleQuestionService,
    CoupleQuestionService,
    BffRequestService,
    MyUserResolver,
    UserResolver,
    SingleQuestionResolver
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
