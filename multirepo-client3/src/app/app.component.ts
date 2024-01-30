import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client 3 (multirepo)';
  valueFromLib!: number;
  constructor(private myLibMonoService: MyLibMonoService) {}

  ngOnInit(): void {
    this.valueFromLib = this.myLibMonoService.getValueFromLib();
  }
}
