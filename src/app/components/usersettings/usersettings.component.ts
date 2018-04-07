import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { InventorydataService } from '../../services/inventorydata.service';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UsersettingsComponent implements OnInit {

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1
  };

  users: any;

  constructor(private _inventorydataService: InventorydataService) { }

  ngOnInit() {
    this._inventorydataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

}
