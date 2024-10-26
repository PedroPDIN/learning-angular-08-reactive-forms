import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { delay, map, Observable, of } from "rxjs";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UserValidatorService implements AsyncValidator {
  constructor(private readonly _userService: UsersService) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // verificar o elemento está sugo ou seja se o próprio elemento está com valor digitado
    if (!control.dirty) {
      // of = irá criar um retorno de Observable de nulo.
      return of(null)
    }

    return this._userService.getUsers().pipe(
      delay(3000),
      map((usersList) => {
        const hasUser = usersList.find(
          (user) => user.name.toLowerCase() === control.value.toLowerCase()
        );

        if (hasUser) {
          return null
        }

        return { userValidator: true }
      })
    )
  }

}
