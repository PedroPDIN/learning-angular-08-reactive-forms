import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './EXEMPLOS/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidadorAssincronoComponent } from './EXEMPLOS/validador-assincrono/validador-assincrono.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupComponent } from './EXEMPLOS/form-group/form-group.component';
import { FormArrayComponent } from './EXEMPLOS/form-array/form-array.component';
import { FormArrayComGroupComponent } from './EXEMPLOS/form-array-com-group/form-array-com-group.component';
import { FormBuilderComponent } from './EXEMPLOS/form-builder/form-builder.component';
import { FormBuildExternoComponent } from './EXEMPLOS/form-build-externo/form-build-externo.component';
import { FormBuildExternoComServiceComponent } from './EXEMPLOS/form-build-externo-com-service/form-build-externo-com-service.component';
import { FormCompFilhoComponent } from './EXEMPLOS/form-comp-filho/form-comp-filho.component';
import { EnderecoComponent } from './EXEMPLOS/form-comp-filho/components/endereco/endereco.component';
import { MarkAsTouchedComponent } from './EXEMPLOS/mark-as-touched/mark-as-touched.component';
import { DesafioTouchedComponent } from './EXEMPLOS/desafio-touched/desafio-touched.component';
import { FormComChamadaHttpComponent } from './EXEMPLOS/form-com-chamada-http/form-com-chamada-http.component';
import { CrossValidatorComponent } from './EXEMPLOS/cross-validator/cross-validator.component';
import { AddAndRemoveControlComponent } from './EXEMPLOS/add-and-remove-control/add-and-remove-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ValidadorAssincronoComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayComGroupComponent,
    FormBuilderComponent,
    FormBuildExternoComponent,
    FormBuildExternoComServiceComponent,
    FormCompFilhoComponent,
    EnderecoComponent,
    MarkAsTouchedComponent,
    DesafioTouchedComponent,
    FormComChamadaHttpComponent,
    CrossValidatorComponent,
    AddAndRemoveControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
