import { HttpParams } from '@angular/common/http';

import { Pagination } from '../core/models/pagination.interface';

export class ParamsBuilder {

  private params: HttpParams;

  constructor() {
    this.params = new HttpParams();
  }

  applyPagination(pagination: Pagination) {
    this.params = this.params
      .set('page', pagination.page.toString())
      .set('size', pagination.size.toString());

    return this;
  }

  setParam(key: string, value: string) {
    this.params = this.params
      .set(key, value);

    return this;
  }

  build() {
    return this.params;
  }

}
