import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
    }),
  }, {
    updateOn: 'change',
  });

  constructor() {
    console.log(this.pessoaForm);

    console.log(
      this.pessoaForm.valueChanges.subscribe((value) =>
        console.log('Value Changes - pessoaForm', value)
      )
    );
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

  get endereco(): FormGroup {
    return this.pessoaForm.get('endereco') as FormGroup;
  }

  get rua(): FormControl<string> {
    return this.endereco.get('rua') as FormControl<string>;
  }

  get numero(): FormControl<string> {
    return this.endereco.get('numero') as FormControl<string>;
  }

  onFormSubmit() {
    console.log('onFormSubmit');
    console.log(this.pessoaForm.value);
  }

  mostrarValue() {
    console.log(this.pessoaForm.value);

    console.log('Valor especifico do FormGroup nome -> ', this.nome);
    console.log('Valor especifico do FormGroup email -> ', this.email);
  }

  alteracaoTotal() {
    console.log('Alteração Total');

    this.pessoaForm.setValue({
      nome: 'nome alt',
      email: 'email alt',
      endereco: {
        rua: 'rua alt',
        numero: 'numero alt',
      },
    });
  }

  alteracaoParcial() {
    console.log('Alteração Parcial');

    this.pessoaForm.patchValue({
      nome: 'nome alt parcial',
      endereco: {
        rua: 'rua alt parcial',
      }
    })
  }
}
