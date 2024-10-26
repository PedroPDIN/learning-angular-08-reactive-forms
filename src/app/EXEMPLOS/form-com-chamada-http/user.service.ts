import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): Observable<any> {
    return of({
      nome: 'Pedro',
      idade: 27,
      ativo: true,
      endereco: {
        rua: 'Rua 1',
        numero: 123,
      },
      telefones: [
        {
          numero: 1191111111,
          ddd: 11,
        },
        {
          numero: 1192222222,
          ddd: 22,
        },
      ],
    });
  }
}
