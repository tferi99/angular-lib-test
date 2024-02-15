import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ENVIRONMENT_TOKEN, MyLibModule } from '@my-lib';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
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
