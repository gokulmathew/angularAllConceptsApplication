import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './modules/base-page/base-page.component';
import { SecondPageComponent } from './modules/second-page/second-page.component';
import {PageNotFoundComponent} from './Pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:BasePageComponent},
  // pathMatch: 'full' is like haveing exact={true} in react. Its better to have it everywhere
  {path:'secondpage',component:SecondPageComponent, pathMatch: 'full' },
  // Info: Displaying Page not found comp
  { path: '**',   component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Info: All the compoents can be loaded here and this can be imported in app.module.ts
//       But this wont work for modules
export const routingComponents = [PageNotFoundComponent];
