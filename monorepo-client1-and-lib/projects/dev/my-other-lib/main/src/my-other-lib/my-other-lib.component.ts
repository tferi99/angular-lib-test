import { Component } from '@angular/core';
import { MyOtherLibService } from '../my-other-lib.service';

@Component({
  selector: 'lib-my-other-lib',
  templateUrl: './my-other-lib.component.html',
  styleUrls: ['./my-other-lib.component.css']
})
export class MyOtherLibComponent {
  constructor(
    public myOtherLibService: MyOtherLibService
  ) {}

  dumpAppMode(): void {
    console.log('ApplicationMode: ' + this.myOtherLibService.getApplicationMode());
  }
}
