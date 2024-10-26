import { Component, EventEmitter, Output } from '@angular/core';
import { PessoaFormController } from './pessoa-form.controller';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-build-externo',
  templateUrl: './form-build-externo.component.html',
  styleUrl: './form-build-externo.component.scss',
})
export class FormBuildExternoComponent extends PessoaFormController {
  @Output('onFormSubmit') onFormSubmitEmit = new EventEmitter

  constructor(private readonly _fbMain: FormBuilder) {
    super(_fbMain);
  }

  onFormSubmit() {
    console.log('onFormSubmit => ', this.pessoaForm.value);

    this.onFormSubmitEmit.emit(this.pessoaForm.value);
  }
}
