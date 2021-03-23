
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent},
  {path: '404', redirectTo: ''},
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
		// Enable the Angular 6+ router features for scrolling and anchors.
		scrollPositionRestoration: "enabled",
		anchorScrolling: "enabled",
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
