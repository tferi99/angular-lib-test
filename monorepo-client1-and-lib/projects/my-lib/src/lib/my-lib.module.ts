import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib/my-lib.component';
import { EmitterComponent } from './emitter/emitter.component';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [
    MyLibComponent,
    EmitterComponent,
    SizerComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    SizerComponent,
    EmitterComponent,
  ]
})
export class MyLibModule { }
