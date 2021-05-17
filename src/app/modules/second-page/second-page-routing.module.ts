import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecondPageComponent } from './second-page.component';


const routes: Routes = [
  {path:'',component:SecondPageComponent},
  // {path:'secondpage',component:SecondPageComponent},


];

@NgModule({
  // Info: As lazy loading, use forChild below
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers : [{provide: APP_BASE_HREF , useValue:'/'}]
})
export class SecondPageRoutingModule { }


