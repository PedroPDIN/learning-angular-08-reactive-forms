import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

function testeValidator(): ValidatorFn {
  return (): ValidationErrors | null => {
    console.log('VALIDADOR');

    return null;
  }
}

@Component({
  selector: 'app-mark-as-touched',
  templateUrl: './mark-as-touched.component.html',
  styleUrl: './mark-as-touched.component.scss'
})
export class MarkAsTouchedComponent implements OnInit {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, testeValidator()]),
    email: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.pessoaForm.get('nome')?.statusChanges.subscribe((value) => console.log('Status Changes Nome =>', value));

    // O uso do SetTimeout é apenas para exemplo didático para melhor compreender o tema.
    setTimeout(() => {
      console.log('Touched PessoaForm', this.pessoaForm.touched)
      console.log('Touched NomeControl', this.pessoaForm.get('nome')?.touched)
      console.log('Touched EmailControl', this.pessoaForm.get('email')?.touched)
    }, 4000);
  }

  markNomeAsTouched() {
    console.log('markNomeAsTouched');

    // this.pessoaForm.get('nome')?.markAsTouched({ onlySelf: true })
    this.pessoaForm.get('nome')?.markAsTouched();
    this.pessoaForm.get('nome')?.updateValueAndValidity();
  }
}
