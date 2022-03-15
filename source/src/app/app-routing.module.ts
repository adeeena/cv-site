import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';

const routes: Routes = [
	{path: 'about' , component: AboutComponent},
	{path: 'contact' , component: ContactComponent},
	{path: '' , component: HomeComponent},
	{path: 'work' , component: WorkComponent},
	{path: 'projects' , component: PersonalProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
