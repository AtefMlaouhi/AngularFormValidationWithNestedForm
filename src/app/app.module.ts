import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AmMaterialModule } from './shared';
import { FormValidationModule } from './formValidation/form-validation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    FormValidationModule,
    AmMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
