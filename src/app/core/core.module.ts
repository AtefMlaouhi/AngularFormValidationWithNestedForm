import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CoreRoutingModule } from './core.routing';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NestedFormComponent } from './nested-form/nested-form.component';

@NgModule({
  declarations: [MainComponent, NestedFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    CoreRoutingModule
  ],
  exports: [MainComponent, NestedFormComponent]
})
export class CoreModule {}
