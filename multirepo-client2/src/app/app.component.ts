import { Component, OnInit } from '@angular/core';
import { MyLibMonoService } from 'my-lib-mono';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client 2 (multirepo)';
  valueFromLib!: number;
  constructor(private myLibMonoService: MyLibMonoService) {}

  ngOnInit(): void {
    this.valueFromLib = this.myLibMonoService.getValueFromLib();
  }
}
