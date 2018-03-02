import { Injectable, NgZone  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Item } from '../models/Item';
import { Bill } from '../models/Bill';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class InventorydataService {

  inventoryUrl: string = 'http://localhost:3000/api/inventory';
  itemURL     : string = 'http://localhost:3000/api/item';
  itemEditURL : string = 'http://localhost:3000/api/itemedit';
  itemRemoveURL : string = 'http://localhost:3000/api/itemremove';
  itemIdURL : string = 'http://localhost:3000/api/storeid';
  newbillURL : string = 'http://localhost:3000/api/newbill';
  billURL : string = 'http://localhost:3000/api/bill';

  inventory : Item[] = [];
  updatedItem : Item;

  constructor(private _http: HttpClient) { 
    
  }

  getInventory(): Observable<Item[]> {
    return this._http.get<Item[]>(this.inventoryUrl);
  }

  savePost(item : Item) : Observable<Item>{
    return this._http.post<Item>(this.itemURL, item, httpOptions)
  }

  newBill(bill : Bill) : Observable<any>{
    return this._http.post<any>(this.newbillURL, bill, httpOptions)
  }

  editItem(item : Item) : Observable<Item>{
    return this._http.post<Item>(this.itemEditURL, item, httpOptions)
  }

  removeItem(item : Item) : Observable<Item>{
    return this._http.post<Item>(this.itemRemoveURL, item, httpOptions)
  }

  getstoredId() : Observable<any>{
    return this._http.get<any>(this.itemIdURL);
  }

  getBill(parameters : {dateFrom : string, dateTo : string}) : Observable<any>{
    return this._http.get<any>(this.billURL, {params : parameters})
  }

}
