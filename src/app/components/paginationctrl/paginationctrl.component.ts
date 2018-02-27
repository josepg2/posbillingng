import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

import { Item } from '../../models/Item';

@Component({
  selector: 'app-paginationctrl',
  templateUrl: './paginationctrl.component.html',
  styleUrls: ['./paginationctrl.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationctrlComponent implements OnInit {

  @Input('data') inventory: Item[];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 25,
    currentPage: 1
};

  constructor() { }

  ngOnInit() {
  }

}
