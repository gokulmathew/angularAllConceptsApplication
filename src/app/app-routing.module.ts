import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './modules/base-page/base-page.component';
import { SecondPageComponent } from './modules/second-page/second-page.component';


const routes: Routes = [
  {path:'',component:BasePageComponent},
  {path:'second-page',component:SecondPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
