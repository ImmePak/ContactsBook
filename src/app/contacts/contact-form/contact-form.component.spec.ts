import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NgxMaskModule } from 'ngx-mask';

import { ContactFormComponent } from './contact-form.component';
import { defaultContacts } from '../contacts-store.service/default.contacts';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  const fakeData = {
    surname: 'test user',
    firstname: '',
    patronymic: '',
    phoneNumber: '9091234567',
  };
  let submitbtn: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxMaskModule.forRoot(),
        ReactiveFormsModule,
      ],
      declarations: [
        ContactFormComponent,
      ],
      providers: [
        { provide: 'DEFAULT_CONTACTS', useValue: defaultContacts },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitbtn = fixture.debugElement.query(By.css('.submit-button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create contactForm while onInit cycle', () => {
    expect(component.contactForm).toBeTruthy();
  });

  describe('submitting block', () => {
    it('should not emit data if form isn`t valid', () => {
      expect(component.contactForm.valid).toBeFalsy();
      spyOn(component.contactSubmited, 'emit');
      component.onSubmit();

      expect(component.contactSubmited.emit).toHaveBeenCalledTimes(0);
    });

    it('should submit valid form', () => {
      component.contactForm.patchValue(fakeData);
      expect(component.contactForm.valid).toBeTruthy();
      spyOn(component.contactSubmited, 'emit');

      component.onSubmit();
      fakeData.phoneNumber = '+7' + fakeData.phoneNumber;
      expect(component.contactSubmited.emit).toHaveBeenCalledTimes(1);
      expect(component.contactSubmited.emit).toHaveBeenCalledWith(fakeData);
    });
  });

  describe('form fields validation errors', () => {
    it('form should be invalid if surname not specifyed', () => {
      component.contactForm.patchValue({ ...fakeData });
      expect(component.contactForm.valid).toBeTruthy();

      component.contactForm.patchValue({ ...fakeData, surname: '' });
      expect(component.contactForm.invalid).toBeTruthy();

      component.contactForm.patchValue({ ...fakeData, phoneNumber: '' });
      expect(component.contactForm.invalid).toBeTruthy();
    });


    it('should set proper surnameInvalid value', () => {
      component.contactForm.patchValue({ ...fakeData, phoneNumber: '' });
      component.onSubmit();
      expect(component.isSurnameInvalid).toBeFalsy();


      component.contactForm.patchValue({ ...fakeData, surname: '' });
      component.onSubmit();
      expect(component.isSurnameInvalid).toBeTruthy();
    });

    it('should set proper phoneNumberInvalid value', () => {
      component.contactForm.patchValue({ ...fakeData, surname: '' });
      component.onSubmit();
      expect(component.isPhoneNumberInvalid).toBeFalsy();


      component.contactForm.patchValue({ ...fakeData, phoneNumber: '' });
      component.onSubmit();
      expect(component.isPhoneNumberInvalid).toBeTruthy();
    });
  });
});
