import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyLibModule, ENVIRONMENT_TOKEN } from '@my-lib';
import { OtherLibDiagnosticsModule } from '@dev/my-other-lib/common';
import { environment } from '@env/environment';
import { MyOtherLibModule } from '@dev/my-other-lib/main';

@NgModule({
  declarations: [
    AppComponent
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
