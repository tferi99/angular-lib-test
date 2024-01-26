import { Injectable } from '@angular/core';

const VERSION: number = 1;

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }
    getVersion(): number {
      return VERSION;
    }

    getValueFromLib(): number {
    return 42;
  }
}
