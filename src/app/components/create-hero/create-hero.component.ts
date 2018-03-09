import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html'
})
export class CreateHeroComponent {

  hero: Hero = {
    name: '',
    publisher: '',
    bio: ''
  };
  created: boolean = false;
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    publisher: new FormControl('', Validators.required),
    bio: new FormControl()
  });

  constructor(private heroesService: HeroesService, private router: Router) { }

  save(): void {
    this.heroesService.store(this.hero).subscribe(res => {
      this.router.navigate(['/']);
    });
  }

}
