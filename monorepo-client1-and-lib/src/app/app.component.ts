import { Component, VERSION } from '@angular/core';
import { MyLibService } from '@my-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monorepo-client1';
  valueFromLib!: number;
  $counter!: Observable<number>;
  fontSizePx = 16;
  fontSizePx2 = this.fontSizePx;
  version = VERSION;
  uuid!: string;

  constructor(private myLibService: MyLibService) {}

  ngOnInit(): void {
    this.valueFromLib = this.myLibService.getValueFromLib();
    this.$counter = this.myLibService.getCounter();

    this.uuid = this.myLibService.generateUUID();
  }
}
