import { Component, OnInit } from '@angular/core';
import { MyLibService } from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  template: `
      <table border="15">
        <tr><td>my-lib v{{myLibService.getVersion()}}</td></tr>
      </table>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor(public myLibService: MyLibService) { }

  ngOnInit(): void {
  }

}
