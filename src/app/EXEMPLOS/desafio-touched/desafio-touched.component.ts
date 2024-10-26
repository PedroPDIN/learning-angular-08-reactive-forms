import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-desafio-touched',
  templateUrl: './desafio-touched.component.html',
  styleUrl: './desafio-touched.component.scss'
})
export class DesafioTouchedComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

  onFormSubmit() {
    if (this.pessoaForm.invalid) {
      console.log('INVALIDO', this.pessoaForm.value);

      // this.pessoaForm.markAllAsTouched();

      Object.keys(this.pessoaForm.controls).forEach((controlKey) => {
        const control = this.pessoaForm.get(controlKey);

        if (control!.invalid) {
          control!.markAsTouched();
        }
      })

    } else {
      console.log('Formulário enviado', this.pessoaForm.value)
    }
  }
}
