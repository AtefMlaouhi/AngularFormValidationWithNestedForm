import { NgModule } from '@angular/core';
import { AmMaterialModule, EmailValidatorDirective } from './';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EmailValidatorDirective],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AmMaterialModule
  ],
  exports: [AmMaterialModule, EmailValidatorDirective]
})
export class SharedModule {}
