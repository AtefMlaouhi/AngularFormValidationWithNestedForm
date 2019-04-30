import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CoreRoutingModule } from './core.routing';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AmMaterialModule } from '../shared';
import { FormValidationModule } from '../formValidation/form-validation.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    AmMaterialModule,
    CoreRoutingModule,
    FormValidationModule
  ],
  exports: [MainComponent]
})
export class CoreModule {}
