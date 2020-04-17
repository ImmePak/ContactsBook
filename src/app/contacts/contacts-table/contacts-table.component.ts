import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from '../interfaces/contact.interface';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsTableComponent {
  @Input() contacts: Observable<Contact[]>;

  @Output() markAsFavourite = new EventEmitter<number>();
  @Output() markAsCommon = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  public onDelete(contactId: number): void {
    this.delete.emit(contactId);
  }

  public onMarkAsFavourite(contactId: number): void {
    this.markAsFavourite.emit(contactId);
  }

  public onMarkAsCommon(contactId: number): void {
    this.markAsCommon.emit(contactId);
  }
}
