import { PessoaFormController } from './../form-build-externo/pessoa-form.controller';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-form-com-chamada-http',
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.scss',
})
export class FormComChamadaHttpComponent implements OnInit {
  // utilização do tipo "any" nos métodos, apenas para fins didáticos.
  pessoaForm!: FormGroup;

  personForm!: FormGroup;

  constructor(private readonly _userService: UserService) {}

  ngOnInit(): void {
    this.createPessoaForm();
    this.getUserAndFullfilPessoaForm();

    this.createPersonForm();
    this.getUserAndFullfilPersonForm();
  }

  get telefones(): FormArray {
    return this.pessoaForm.get('telefones') as FormArray;
  }

  get phoneNumber(): FormArray {
    return this.personForm.get('phoneNumbers') as FormArray;
  }

  private createPessoaForm() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl(null),
      ativo: new FormControl(false),
      endereco: new FormGroup({
        rua: new FormControl(''),
        numero: new FormControl(null),
      }),
      telefones: new FormArray([]),
    });
  }

  private getUserAndFullfilPessoaForm() {
    this._userService.getUser().subscribe((userResponse: any) => {
      this.fullfilPessoaForm(userResponse);
    });
  }

  private fullfilPessoaForm(userResponse: any) {
    // lembrando que os valores do "userResponse" foi passada diretamente pois a os nomes e as ordens das keys (chaves) do FormGroup "pessoaForm" são as mesmas do objeto que é retornado da requisição HTTP.
    this.pessoaForm.patchValue(userResponse);
    // garantir que FormArray esteja limpo, antes de haver interação.
    this.telefones.clear();

    userResponse.telefones.forEach((tel: any) => {
      this.telefones.push(
        new FormGroup({
          numero: new FormControl(tel.numero),
          ddd: new FormControl(tel.ddd),
        })
      );
    });

    // console.log('form http', this.pessoaForm);
    console.log('form http', this.pessoaForm.value);
  }


  /////////////////////////////////////
  //////// FORM COM CONVERSÃO ////////
  ///////////////////////////////////


  createPersonForm() {
    this.personForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(null),
      active: new FormControl(false),
      address: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(null),
      }),
      phoneNumbers: new FormArray([]),
    });
  }

  getUserAndFullfilPersonForm() {
    this._userService.getUser().subscribe((userResponse) => {
      this.fullfilPersonForm(userResponse);
    })
  }

  fullfilPersonForm(userResponse: any) {
    const person = {
      name: userResponse.nome,
      age: userResponse.idade,
      active: userResponse.ativo,
      address: {
        street: userResponse.endereco.rua,
        number: userResponse.endereco.numero,
      },
      phoneNumber: [],
    }

    this.personForm.patchValue(person);

    userResponse.telefones.forEach((tel: any) => {
      this.phoneNumber.push(new FormGroup({
        number: new FormControl(tel.numero),
        area: new FormControl(tel.ddd),
      }))
    })

    // console.log(this.personForm);
    console.log('FORM COM CONVERSÃO', this.personForm.value);
  }
}
