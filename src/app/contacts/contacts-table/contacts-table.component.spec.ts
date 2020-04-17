import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { of } from 'rxjs';

import { PipesModule } from '../../pipes/pipes.module';

import { ContactsTableComponent } from './contacts-table.component';

describe('ContactsTableComponent', () => {
  let component: ContactsTableComponent;
  let fixture: ComponentFixture<ContactsTableComponent>;
  const contacts = of([
    { id: 1, surname: 'z', phoneNumber: '+7 (909) 123 01 01', favourite: true, firstname: '', patronymic: '' },
    { id: 2, surname: 'a', phoneNumber: '+7 (909) 123 01 02', favourite: true, firstname: '', patronymic: '' },
    { id: 3, surname: 'b', phoneNumber: '+7 (909) 123 01 03', favourite: false, firstname: '', patronymic: '' },
    { id: 10, surname: 'd', phoneNumber: '+7 (909) 123 01 05', favourite: false, firstname: '', patronymic: '' },
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PipesModule,
      ],
      declarations: [
        ContactsTableComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsTableComponent);
    component = fixture.componentInstance;
    component.contacts = contacts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('emitters test', () => {
    it('onDelete should case delete.emit', () => {
      spyOn(component.delete, 'emit');
      component.onDelete(11);

      expect(component.delete.emit).toHaveBeenCalledTimes(1);
      expect(component.delete.emit).toHaveBeenCalledWith(11);
    });

    it('onMarkAsFavourite should case markAsFavourite.emit', () => {
      spyOn(component.markAsFavourite, 'emit');
      component.onMarkAsFavourite(12);

      expect(component.markAsFavourite.emit).toHaveBeenCalledTimes(1);
      expect(component.markAsFavourite.emit).toHaveBeenCalledWith(12);
    });

    it('onMarkAsCommon should case markAsCommon.emit', () => {
      spyOn(component.markAsCommon, 'emit');
      component.onMarkAsCommon(13);

      expect(component.markAsCommon.emit).toHaveBeenCalledTimes(1);
      expect(component.markAsCommon.emit).toHaveBeenCalledWith(13);
    });
  });
});
