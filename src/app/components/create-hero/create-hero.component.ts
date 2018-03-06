import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';

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
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    publisher: new FormControl('', Validators.required),
    bio: new FormControl()
  });

  constructor() { }

  save(): void {
    console.log(this.hero);
  }

}
