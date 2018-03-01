import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  InventorydataService
} from '../../services/inventorydata.service';

import {
  Item
} from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  inventory: Item[] = [];
  categories: string[] = ["A", "B", "C"];
  taxes: any[] = [{
    id: 0,
    name: "GST @ 0",
    value: 0
  }, {
    id: 1,
    name: "GST @ 5",
    value: 5
  }, {
    id: 2,
    name: "GST @ 12",
    value: 12
  }, {
    id: 10,
    name: "GST @ 18",
    value: 18
  }];
  offers: any[] = [{
    name: "Percent",
    value: 0,
    type: "percent"
  }, {
    name: "Rupee",
    value: 0,
    type: "rupee"
  }, {
    name: "Summer 5",
    value: 5,
    type: "percent"
  }]
  selectedoffer: any = {
    name: "Selct Offer",
    value: 0,
    type: ""
  };
  isActive: boolean = false;
  isEdit: boolean = false;

  @ViewChild('itemForm') form: any;

  currentItem: Item = {
    id: null,
    prodid: null,
    prodname: null,
    proddisc: null,
    isremoved: false,
    stock: null,
    unitprice: null,
    category: null,
    tax: null,
    hasoff: false,
    offtype: 'percent',
    offvalue: 0,
    updated_by: null
  };

  constructor(private _inventorydataService: InventorydataService) {}

  ngOnInit() {
    this._inventorydataService.getInventory().subscribe(items => {
      this.inventory = items;
      console.log(items);
    });
    this._inventorydataService.getstoredId().subscribe(itemid => {
      if(!this.isEdit){
        this.currentItem.prodid = 'P' + (itemid.prodid + 1).toString();
      }
    });
  }


  onChangeOffer(offer: any) {
    this.currentItem.offtype = offer.type;
    this.currentItem.offvalue = offer.value;
  }

  onSubmit({
    value,
    valid
  }: {
    value: any,
    valid: boolean
  }) {
    if (valid && !this.isActive) {
      this.isActive = true;
      this.isEdit ? this.onEditItem(this.currentItem) : this.onAddItem(value);
    }
  }

  onUpdateItem(item: Item) {
    this.isEdit = true;
    this.currentItem = Object.assign({}, item);
  }

  onRemoveItem(item: Item) {
    this._inventorydataService.removeItem(item).subscribe(item => {
      this.inventory.forEach((cur, index) => {
        if (item.prodid === cur.prodid) {
          this.inventory.splice(index, 1);
        }
      })
      this.form.reset();
      this.isActive = false;
    })
  }

  onEditItem(item: Item) {
    this._inventorydataService.editItem(item).subscribe(item => {
      this.inventory.forEach((cur, index) => {
        if (item.prodid === cur.prodid) {
          this.inventory.splice(index, 1);
          this.inventory.unshift(item);
        }
      });
      this.setEmptyItem();
      this.isActive = false;
    })
  }

  onAddItem(item: Item) {
    item.prodid = this.currentItem.prodid;
    this._inventorydataService.savePost(item).subscribe(item => {
      if (item.status === 'ok') {
        this.inventory.unshift(item);
        this.setEmptyItem();
        this.isActive = false;
      } else {
        this.isActive = false;
        //do error popup here
      }
    }, error => {
      console.log(error);
    })
  }

  setEmptyItem() {
    this.form.reset();
    this._inventorydataService.getstoredId().subscribe(itemid => {
      this.isEdit = false;
      this.currentItem = {
        id: null,
        prodid: 'P' + (itemid.prodid + 1).toString(),
        prodname: null,
        proddisc: null,
        isremoved: false,
        stock: null,
        unitprice: null,
        category: null,
        tax: null,
        hasoff: false,
        offtype: 'percent',
        offvalue: 0,
        updated_by: null
      };
    })

  }

}
