import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MyLibService } from '../my-lib.service';
import { Environment, ENVIRONMENT_TOKEN } from '../my-lib.common';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor(
    public myLibService: MyLibService,
    @Inject(ENVIRONMENT_TOKEN) @Optional() public env: Environment
    ) { }

  ngOnInit(): void {
  }

  dumpAppMode(): void {
    console.log('ApplicationMode: ' + this.myLibService.getApplicationMode());
  }
}
