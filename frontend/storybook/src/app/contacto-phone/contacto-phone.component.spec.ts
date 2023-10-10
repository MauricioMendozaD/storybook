import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPhoneComponent } from './contacto-phone.component';

describe('ContactoPhoneComponent', () => {
  let component: ContactoPhoneComponent;
  let fixture: ComponentFixture<ContactoPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
