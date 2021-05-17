import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasePageModule } from './modules/base-page/base-page.module';
import { SecondPageModule } from './modules/second-page/second-page.module';
import { UserDataService } from './services/user-data.service';


@NgModule({
  // Info: Import new components under declarations
  declarations: [
    AppComponent,
    routingComponents
  ],
    // Info: Import new modules under imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasePageModule,
    // No need to mention second module, becoz it is lazy loaded
    // SecondPageModule
  ],
  providers: [
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
