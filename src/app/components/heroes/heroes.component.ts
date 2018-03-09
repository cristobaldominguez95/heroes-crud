import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  deletedHeroes: Hero[] = [];
  loading: boolean = true;

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
    this.heroService.getAll().subscribe(heroes => {
      for (let id in heroes) {
        heroes[id]['id'] = id;
        this.heroes.push(heroes[id]);
      }
      this.loading = false;
    });
  }

  destroy(id: string, hero: Hero): void {
    this.heroService.destroy(id).subscribe(res => {
      this.deletedHeroes.push(hero);
      setTimeout(() => {
        this.heroes = this.heroes.filter(hero => {
          return hero['id'] != id;
        });
      }, 1000);
    });
  }

}
