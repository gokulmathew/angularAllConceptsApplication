import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasePageComponent } from './modules/base-page/base-page.component';
import { BasePageModule } from './modules/base-page/base-page.module';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    //You have to mention the new component created here
    BasePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasePageModule,

  ],
  providers: [
    UserDataService
  ],
  bootstrap: [AppComponent]
  // bootstrap: [BasePageComponent]
})
export class AppModule { }
