import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    name: new FormControl(),
    publisher: new FormControl(),
    bio: new FormControl()
  });

  constructor() { }

  save(): void {
    console.log(this.formGroup.value);
  }

}
