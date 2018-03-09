import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'heroes/create', component: CreateHeroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
