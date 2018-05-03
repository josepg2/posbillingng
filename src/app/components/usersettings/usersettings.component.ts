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

  users: any[] = [];
  user : any;

  isEdit : boolean = false;
  onDC : boolean = false;

  constructor(private _inventorydataService: InventorydataService) { }

  ngOnInit() {
    this._inventorydataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    })
    this.user = this.getEmptyUser();
  }

  getEmptyUser() : any {
    return {
      username : '',
      password : '',
      canedit : false,
    }
  }
  
  onAddNewUser() : void {
    if(this.user.username && this.user.password){
      this.onDC = true;
      this._inventorydataService.newUser(this.user).subscribe(result => {
        this.users = result;
        this.user = this.getEmptyUser();
      })
    }else {

    }
  }

}
