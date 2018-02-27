import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

import { Item } from '../../models/Item';

@Component({
  selector: 'app-itempagination',
  templateUrl: './itempagination.component.html',
  styleUrls: ['./itempagination.component.css']
})
export class ItempaginationComponent implements OnInit {

  @Output() updateItem : EventEmitter<Item> = new EventEmitter();
  @Output() removeItem : EventEmitter<Item> = new EventEmitter();

  @Input('data') inventory: Item[];

  public config: PaginationInstance = {
    id: 'itempagination',
    itemsPerPage: 25,
    currentPage: 1
  };

  constructor() { }

  ngOnInit() {
  }

  onEditItem(item : Item) {
    this.updateItem.emit(item);
  }

  onRemoveItem(item: Item) {
    this.removeItem.emit(item);
  }

}
