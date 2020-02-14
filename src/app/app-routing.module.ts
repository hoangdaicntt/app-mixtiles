import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {RegisterComponent} from './screens/register/register.component';
import {DesignComponent} from './screens/design/design.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'getstarted', component: RegisterComponent},
  {path: 'design', component: DesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
