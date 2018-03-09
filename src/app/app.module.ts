import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroesService } from './services/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CreateHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
