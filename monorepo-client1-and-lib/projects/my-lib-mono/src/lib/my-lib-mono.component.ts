import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-mono',
  template: `
      <table border="15">
        <tr><td>my-lib-mono v4</td></tr>
      </table>
  `,
  styles: [
  ]
})
export class MyLibMonoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
