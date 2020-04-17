import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Contact } from '../interfaces/contact.interface';

const numberPrefix = '+7';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit {
  @Output() contactSubmited = new EventEmitter<Contact>();

  public contactForm: FormGroup;
  public isSurnameInvalid: boolean;
  public isPhoneNumberInvalid: boolean;

  public surname: AbstractControl;
  public phoneNumber: AbstractControl;

  ngOnInit(): void {
    this.contactForm = this.formInit();
    this.initInternals();
  }

  private formInit(): FormGroup {
    return new FormGroup({
      surname: new FormControl('', Validators.required),
      firstname: new FormControl(''),
      patronymic: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
    });
  }

  private initInternals(): void {
    this.surname = this.contactForm.get('surname');
    this.phoneNumber = this.contactForm.get('phoneNumber');
  }

  public onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    this.contactSubmited.emit({
      ...this.contactForm.value,
      phoneNumber: numberPrefix + this.contactForm.value.phoneNumber,
    });
    this.contactForm.reset();
  }

  private validateForm(): boolean {
    this.isSurnameInvalid = this.surname.invalid;
    this.isPhoneNumberInvalid = this.phoneNumber.invalid;

    this.markControlsUntouched();

    return this.contactForm.valid;
  }

  private markControlsUntouched(): void {
    this.surname.markAsUntouched();
    this.phoneNumber.markAsUntouched();
  }
}
