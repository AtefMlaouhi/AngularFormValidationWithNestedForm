import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailValidatorComponent } from './mail-validator.component';

describe('MailValidatorComponent', () => {
  let component: MailValidatorComponent;
  let fixture: ComponentFixture<MailValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
