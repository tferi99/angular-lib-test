import { Component, OnInit } from '@angular/core';
import { MyLibService } from '@my-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multirepo-client2';
  valueFromLib!: number;
  $counter!: Observable<number>;
  fontSizePx = 16;

  constructor(private myLibService: MyLibService) {}

  ngOnInit(): void {
    this.valueFromLib = this.myLibService.getValueFromLib();
    this.$counter = this.myLibService.getCounter();
  }

  onEmit(ev: string) {
    console.log('EMIT', ev);
  }
}
