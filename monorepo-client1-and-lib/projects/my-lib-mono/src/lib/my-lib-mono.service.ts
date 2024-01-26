import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibMonoService {

  constructor() { }

  getValueFromLib(): number {
    return 42;
  }
}
