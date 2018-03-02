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
  Bill,
  BillingItem
} from '../../models/Bill';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  inventory: Item[] = [];
  selectedItem: Item;
  billItem: BillingItem;

  //dateFrom : Date;
  //dateTo : Date;

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
    //this.dateFrom = new Date();
    //this.dateTo = new Date();
  }

  ngOnInit() {
    this.billItem = this.getEmptyBillItem();
    this._inventorydataService.getInventory().subscribe(items => {
      this.inventory = items;
    })
  }

  onNewBill() {
    console.log(this.billItem);

  }

  itemSelected(item: Item) {
    if (item) {
      this.billItem.prodid = item.prodid;
      this.billItem.prodname = item.prodname;
      this.billItem.quantity = 1;
      this.billItem.unitprice = item.unitprice;
      this.billItem.tax = item.tax;
      this.billItem.offvalue = item.hasoff ? (item.offtype === 'rupee' ? item.offvalue : (item.offvalue * item.unitprice / 100)) : 0;
    } else {
      this.billItem = this.getEmptyBillItem();
    }
  }

  getEmptyBillItem(): BillingItem {
    return {
      prodid: null,
      prodname: null,
      quantity: null,
      unitprice: null,
      tax: null,
      offvalue: null
    }
  }

  //this._inventorydataService.newBill(this.bill).subscribe(out => {
  //  console.log(out);
  //})

  //this._inventorydataService.getBill(this.dateToQueryObject(this.dateFrom, this.dateTo)).subscribe(out => {
  //   console.log(out);
  //})

  dateToQueryObject(dateFrom: Date, dateTo: Date): any {
    dateFrom.setHours(0, 0, 0, 0);
    dateTo.setDate(dateTo.getDate() + 1);
    dateTo.setHours(0, 0, 0, 0);
    return {
      dateFrom: dateFrom.toISOString().substr(0, 10) + ' ' + dateFrom.toISOString().substr(11, 8),
      dateTo: dateTo.toISOString().substr(0, 10) + ' ' + dateTo.toISOString().substr(11, 8)
    }
  }

}
