import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSystemComponent } from './payment-system.component';

describe('PaymentSystemComponent', () => {
  let component: PaymentSystemComponent;
  let fixture: ComponentFixture<PaymentSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
