import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule } from '@my-lib';
import { ENVIRONMENT_TOKEN } from '../../projects/my-lib/src/lib/my-lib.common';
import { environment } from '../environments/environment';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule
  ],
  providers: [
    { provide: ENVIRONMENT_TOKEN, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
