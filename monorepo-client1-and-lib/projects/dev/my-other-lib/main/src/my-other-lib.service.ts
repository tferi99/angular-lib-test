import { Inject, Injectable, Optional } from '@angular/core';
import { Environment, ENVIRONMENT_TOKEN } from './my-other-lib.common';

@Injectable({
  providedIn: 'root'
})
export class MyOtherLibService {

  constructor(
    @Inject(ENVIRONMENT_TOKEN) @Optional() private env: Environment
  ) { }

  getValueFromOtherLib(): number {
    return 103;
  }

  getApplicationMode(): string {
    if (!this.env) {
      console.warn(`No token(${ENVIRONMENT_TOKEN}) provided !!!`);
    }
    return this.env ? this.env.mode : '?';
  }
}
