import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BasePageComponent  ],
  exports:[
    
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class BasePageModule { }
