import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

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

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([]),
    BrowserAnimationsModule,
    JwtModule.forRoot(jwtOptions)
  ],
  providers: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
