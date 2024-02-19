import { Inject, Injectable, Optional } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Environment, ENVIRONMENT_TOKEN } from './my-lib.common';
import { v4 as uuidv4 } from 'uuid';

const VERSION: number = 3;

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  private counter!: Observable<number>;

  constructor(
    @Inject(ENVIRONMENT_TOKEN) @Optional() private env: Environment
  ) { }

  getVersion(): number {
    return VERSION;
  }

  getValueFromLib(): number {
    return 42;
  }

  getCounter(): Observable<number> {
    if (!this.counter) {
      this.counter = interval(1000);
    }
    return this.counter;
  }

  getApplicationMode(): string {
    if (!this.env) {
      console.warn(`No token(${ENVIRONMENT_TOKEN}) provided !!!`);
    }
    return this.env ? this.env.mode : '?';
  }

  generateUUID(): string {
    return uuidv4();
  }
}
