import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function invalidTextValidator(invalidText: string): ValidatorFn {
  return ((control: AbstractControl): ValidationErrors | null => {
    // pode verificar o retorno do control e principalmente o campo "errors" para que possa capturar a mensagem de erro definida abaixo.
    // console.log('control =>', control);

    const hasInvalidControl = control.value.includes(invalidText);

    return hasInvalidControl ?  { 'invalidText': 'Este Texto está inválido' } : null;
  })
}
