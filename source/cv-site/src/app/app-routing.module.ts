import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MetroMapComponent} from './metro-map/metro-map.component';
import {BioComponent} from './bio/bio.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'metro-map' , component: MetroMapComponent},
	{path: 'bio' , component: BioComponent},
	{path: '' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
