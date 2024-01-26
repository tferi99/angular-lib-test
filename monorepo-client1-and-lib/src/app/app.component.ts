import { Component } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monorepo-client1';
  valueFromLib!: number;
  constructor(private myLibMonoService: MyLibService) {}

  ngOnInit(): void {
    this.valueFromLib = this.myLibMonoService.getValueFromLib();
  }
}
