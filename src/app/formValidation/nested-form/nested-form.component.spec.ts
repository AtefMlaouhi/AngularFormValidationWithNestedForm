import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormComponent } from './nested-form.component';
import { FormValidationModule } from '../form-validation.module';

describe('NestedFormComponent', () => {
  let component: NestedFormComponent;
  let fixture: ComponentFixture<NestedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormValidationModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NestedFormComponent', () => {
    expect(component).toBeTruthy();
  });
});
