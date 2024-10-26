import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-comp-filho',
  templateUrl: './form-comp-filho.component.html',
  styleUrl: './form-comp-filho.component.scss',
})
export class FormCompFilhoComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', Validators.required),
    }),
  });

  enviar() {
    console.log('Reactive Form Filhos => ',this.pessoaForm.value)
  }
}
