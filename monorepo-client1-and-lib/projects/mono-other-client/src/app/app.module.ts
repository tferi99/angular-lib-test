import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyLibModule, ENVIRONMENT_TOKEN } from '@my-lib';
//import { OtherLibDiagnosticsModule } from '@dev/my-other-lib/common';
import { environment } from '@env/environment.development';
import { OtherLibDiagnosticsModule } from '@dev/my-other-lib/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule,
    OtherLibDiagnosticsModule
  ],
  providers: [
    { provide: ENVIRONMENT_TOKEN, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
