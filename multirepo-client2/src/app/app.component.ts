import { Component, OnInit, VERSION } from '@angular/core';
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
  version = VERSION;
  uuid!: string;
  testString = 'test2';

  constructor(protected myLibService: MyLibService) {}

  ngOnInit(): void {
    this.valueFromLib = this.myLibService.getValueFromLib();
    this.$counter = this.myLibService.getCounter();
    this.uuid = this.myLibService.generateUUID();
  }

  onEmit(ev: string) {
    console.log('EMIT', ev);
  }
}
