import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ContactsService } from '../interfaces/contacts.service';

import { ContactsContentComponent } from './contacts-content.component';

describe('ContactsContentComponentt', () => {
  let component: ContactsContentComponent;
  let fixture: ComponentFixture<ContactsContentComponent>;
  const serviceStub = jasmine
    .createSpyObj<ContactsService>([
      'add',
      'get',
      'markFavourite',
      'markCommon',
      'delete'
    ]);

  const contacts = of([
    { id: 1, surname: 'z', phoneNumber: '+7 (909) 123 01 01', favourite: true, firstname: '', patronymic: '' },
    { id: 2, surname: 'a', phoneNumber: '+7 (909) 123 01 02', favourite: true, firstname: '', patronymic: '' },
    { id: 3, surname: 'b', phoneNumber: '+7 (909) 123 01 03', favourite: false, firstname: '', patronymic: '' },
    { id: 10, surname: 'd', phoneNumber: '+7 (909) 123 01 05', favourite: false, firstname: '', patronymic: '' },
  ]);
  serviceStub.get.and.returnValue(contacts.pipe(delay(100)));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactsContentComponent,
      ],
      providers: [
        { provide: ContactsService, useValue: serviceStub }
      ]
    })
      .overrideTemplate(ContactsContentComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsContentComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort contacts list properly', (done: DoneFn) => {
    component.contacts.subscribe(data => {
      expect(data[0].id).toBe(2);
      expect(data[1].id).toBe(1);
      expect(data[2].id).toBe(3);
      expect(data[3].id).toBe(10);
      done();
    });
  });

  it('should call ContactsService.delete while deleteContact function execution', () => {
    serviceStub.delete.and.stub();
    component.deleteContact(10);

    expect(serviceStub.delete).toHaveBeenCalledTimes(1);
    expect(serviceStub.delete).toHaveBeenCalledWith(10);
  });

  it('should call ContactsService.markFavourite while markContactFavourite function execution', () => {
    serviceStub.markFavourite.and.stub();

    component.markContactFavourite(12);

    expect(serviceStub.markFavourite).toHaveBeenCalledTimes(1);
    expect(serviceStub.markFavourite).toHaveBeenCalledWith(12);
  });

  it('should call ContactsService.markCommon while markContactCommon function execution', () => {
    serviceStub.markCommon.and.stub();

    component.markContactCommon(13);

    expect(serviceStub.markCommon).toHaveBeenCalledTimes(1);
    expect(serviceStub.markCommon).toHaveBeenCalledWith(13);
  });

  it('handleAddition should throw error if contact is undefined/null', () => {
    expect(() => component.handleAddition(null)).toThrow();
    expect(() => component.handleAddition(undefined)).toThrow();
  });

  it('handleAddition should call ContactsService.Add', () => {
    const data = { id: 2, surname: 'z', phoneNumber: '+7 (909) 123 01 01', favourite: true, firstname: '', patronymic: '' };
    serviceStub.add.and.stub();
    component.handleAddition(data);

    expect(serviceStub.add).toHaveBeenCalledTimes(1);
    expect(serviceStub.add).toHaveBeenCalledWith(data);
  });
});
