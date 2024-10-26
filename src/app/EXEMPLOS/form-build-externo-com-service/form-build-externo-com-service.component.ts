import { Component, EventEmitter, Output } from '@angular/core';
import { PessoaFormControllerService } from './pessoa-form-controller.service';

@Component({
  selector: 'app-form-build-externo-com-service',
  templateUrl: './form-build-externo-com-service.component.html',
  styleUrl: './form-build-externo-com-service.component.scss',
})
export class FormBuildExternoComServiceComponent {
  @Output('onFormSubmit') onFormSubmitEmit = new EventEmitter();

  constructor(
    public readonly _pessoaFormControllerService: PessoaFormControllerService
  ) {}

  onFormSubmit() {
    console.log('onFormSubmit => ', this._pessoaFormControllerService.pessoaForm.value);

    this.onFormSubmitEmit.emit(
      this._pessoaFormControllerService.pessoaForm.value
    );
  }
}
