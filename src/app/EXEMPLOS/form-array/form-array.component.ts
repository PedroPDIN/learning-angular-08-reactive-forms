import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss',
})
export class FormArrayComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required])
    ]),
  });

  constructor() {
    console.log('musicasForm', this.musicasForm);
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }

  adicionarMusica(): void {
    this.musicas.push(new FormControl('Novo', [Validators.required]))
  }

  removerMusicas(musicaIndex: number) {
    this.musicas.removeAt(musicaIndex);
  }
}
