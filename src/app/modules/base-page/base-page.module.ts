import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BasePageComponent],
  exports:[
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class BasePageModule { }
