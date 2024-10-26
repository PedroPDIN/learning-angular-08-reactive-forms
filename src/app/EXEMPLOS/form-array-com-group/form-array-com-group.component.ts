import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-com-group',
  templateUrl: './form-array-com-group.component.html',
  styleUrl: './form-array-com-group.component.scss',
})
export class FormArrayComGroupComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      this.criarGrupoMusica(),
    ]),
  });

  constructor() {
    console.log('musicasForm com group', this.musicasForm);

    // apenar para verificar se os valores estão sendo passados e com a estrutura correta, através do valueChange, para quando houver alteração no FormArray "musicas" disparar o console.log.
    this.musicas.valueChanges.subscribe((v) => console.log(v));
  }

  private criarGrupoMusica() {
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      banda: new FormControl('', [Validators.required]),
    });
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }

  adicionarMusica() {
    return this.musicas.push(this.criarGrupoMusica())
  }

  removerMusica(musicaId: number) {
    return this.musicas.removeAt(musicaId)
  }
}
