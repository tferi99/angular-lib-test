import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { MyLibService } from '@my-lib';
import { MyOtherLibService } from '@dev/my-other-lib/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mono-other-client';

  valueFromLib!: number;
  valueFromOtherLib!: number;
  $counter!: Observable<number>;
  fontSizePx = 16;
  fontSizePx2 = this.fontSizePx;
  version = VERSION;
  uuid!: string;

  constructor(
    private myLibService: MyLibService,
    private myOtherLibService: MyOtherLibService
  ) {
  }

  ngOnInit(): void {
    this.valueFromLib = this.myLibService.getValueFromLib();
    this.valueFromOtherLib = this.myOtherLibService.getValueFromOtherLib();
    this.$counter = this.myLibService.getCounter();

    this.uuid = this.myLibService.generateUUID();
  }
}
