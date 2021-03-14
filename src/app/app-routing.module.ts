
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainComponent},
  {path: '404', redirectTo: '/home'},
  {path: '**', redirectTo: '/home'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
