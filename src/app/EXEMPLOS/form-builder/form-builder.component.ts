import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit {
  pessoaForm!: FormGroup;

  constructor(private readonly _fb: FormBuilder) { }

  // existe outra possibilidade ou contexto para utilizar o FormBuilder, no caso como exemplo será utilizado no ngOnInit (OnInit).
  ngOnInit(): void {
    this.pessoaForm = this._fb.group({
      nome: ['', Validators.required],
      email: this._fb.control('', { validators: [Validators.required] }), // uma alternativa de criar um FormControl.
      endereco: this._fb.group({
        rua: ['', Validators.required], // outra alternativa de criar um FormControl.
        numero: ['', Validators.required],
      }),
      musicas: this._fb.array([
        ['', [Validators.required]],
      ])
    })
  }
}
