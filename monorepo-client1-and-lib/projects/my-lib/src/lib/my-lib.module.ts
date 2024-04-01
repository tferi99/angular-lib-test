import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib/my-lib.component';
import { EmitterComponent } from './emitter/emitter.component';
import { SizerComponent } from './sizer/sizer.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    MyLibComponent,
    EmitterComponent,
    SizerComponent,
    CustomPipe
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    SizerComponent,
    EmitterComponent,
    CustomPipe
  ]
})
export class MyLibModule { }
