import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule } from '@my-lib';
import { ENVIRONMENT_TOKEN } from '../../projects/my-lib/src/lib/my-lib.common';
//import { environment } from '../environments/environment';
import { SizerComponent } from './sizer/sizer.component';
import { OtherLibDiagnosticsModule } from '@dev/my-other-lib/common';
import { MyOtherLibModule } from '@dev/my-other-lib/main';
import { environment } from '@env/environment';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule,
    OtherLibDiagnosticsModule,
    MyOtherLibModule
  ],
  providers: [
    { provide: ENVIRONMENT_TOKEN, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
