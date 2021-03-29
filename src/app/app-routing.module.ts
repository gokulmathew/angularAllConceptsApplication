import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './modules/base-page/base-page.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'basepage',component:BasePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
