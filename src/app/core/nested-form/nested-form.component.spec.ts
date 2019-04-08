import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormComponent } from './nested-form.component';
import { CoreModule } from '../core.module';

describe('NestedFormComponent', () => {
  let component: NestedFormComponent;
  let fixture: ComponentFixture<NestedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule]
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
