import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multirepo-client2';
  valueFromLib!: number;
  constructor(private myLibService: MyLibService) {}

  ngOnInit(): void {
    this.valueFromLib = this.myLibService.getValueFromLib();
  }
}
