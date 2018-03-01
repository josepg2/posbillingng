import {
  Component,
  OnInit
} from '@angular/core';
import {
  InventorydataService
} from '../../services/inventorydata.service';

import {
  Item
} from '../../models/Item';
import {
  Bill
} from '../../models/Bill';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  inventory: Item[] = [];
  selectedItem: Item;

  date : Date;
  formattedDate : string;

  bill: Bill = {
    id: 100,
    billid: "fsdf",
    tax: 2,
    offvalue: 3,
    total: 200,
    items: [{
        prodid: "string",
        prodname: "string",
        quantity: 1,
        unitprice: 2,
        tax: 3,
        offvalue: 4
      },
      {
        prodid: "string",
        prodname: "string",
        quantity: 1,
        unitprice: 2,
        tax: 3,
        offvalue: 4
      }
    ]
  }

  constructor(private _inventorydataService: InventorydataService) {
    this.date = new Date();
  }

  ngOnInit() {
    this._inventorydataService.getInventory().subscribe(items => {
      this.inventory = items;
    })
  }

  onNewBill() {
   //this._inventorydataService.newBill(this.bill).subscribe(out => {
   //  console.log(out);
   //})

   // this._inventorydataService.getBill(new Date(), new Date()).subscribe(out => {
   //   console.log(out);
   // })
   this.date.setHours(0,0,0,0);
   this.formattedDate = this.date.toISOString().substr(0, 10)+' '+this.date.toISOString().substr(11, 8 )
  }

}
