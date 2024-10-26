import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { invalidTextValidator } from './invalid-text-validator';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent implements OnInit {
  name = new FormControl<string>(
    {
      value: 'Inicial',
      disabled: false,
    },
    [Validators.required, Validators.minLength(6), invalidTextValidator('pedro')]
  );

  // name = new FormControl<string>('Este é o valor inicial', {
  //   nonNullable: true,
  //   validators: [Validators.required, Validators.minLength(6)],
  //   updateOn: 'blur',
  // });

  ngOnInit(): void {
    console.log(this.name);

    this.name.valueChanges.subscribe((v) => console.log('ValueChanges', v));
    this.name.statusChanges.subscribe((v) => console.log('ValueChanges', v));
  }

  mostrarStatus(): void {
    console.log(this.name);
  }

  alterarValor() {
    this.name.setValue('Valor Alterado!!!');
  }

  inputValue() {
    console.log('Método InputValue', this.name.value);
  }

  desabilitarBtn() {
    this.name.disable();
  }

  habilitarBtn() {
    this.name.enable();
  }

  reset() {
    // this.name.reset();
    this.name.reset('Aqui o valor foi apagado :(');

    this.mostrarStatus();
  }

  // setValidators() {
  //   this.name.setValidators([]);
  //   this.name.setValue('Fe');
  //   this.name.setValidators(Validators.minLength(6)) // ira sobre escrever os validadores já existente (eliminando assim o validador de "required").
  //   this.name.updateValueAndValidity();
  // }

  addValidators() {
    this.name.addValidators(Validators.maxLength(7)) // adicionando um validador sem sobre escrever
    this.name.updateValueAndValidity();
  }
}
