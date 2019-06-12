import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeValidationComponent } from './home-validation/home-validation.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { MailValidatorComponent } from './mail-validator/mail-validator.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeValidationComponent,
    NestedFormComponent,
    MailValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [HomeValidationComponent, NestedFormComponent]
})
export class FormValidationModule {}
