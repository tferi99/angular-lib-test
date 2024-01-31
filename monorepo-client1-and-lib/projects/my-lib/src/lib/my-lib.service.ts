import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

const VERSION: number = 1;

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  private counter!: Observable<number>;

  constructor() { }
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
}
