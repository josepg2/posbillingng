import { Injectable, NgZone  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Item } from '../models/Item';
import { Bill, BillingItem } from '../models/Bill';
import { Tax } from '../models/Tax';
import { Purchase } from '../models/Purchase';

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
  billItemsURL : string = 'http://localhost:3000/api/billitems';
  taxURL : string = 'http://localhost:3000/api/tax';
  categoryURL : string = 'http://localhost:3000/api/category';
  offerURL : string = 'http://localhost:3000/api/offers';
  purchaseURL : string = 'http://localhost:3000/api/purchase';
  userURL : string = 'http://localhost:3000/api/users';

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

  getBillItems(billId : string) : Observable<BillingItem[]>{
    return this._http.get<BillingItem[]>(this.billItemsURL, {params : {billid : billId}})
  }

  newPurchase(purchase : Purchase) : Observable<any>{
    return this._http.post<any>(this.purchaseURL, purchase, httpOptions)
  }

  getPurchase(parameters: {dateFrom : string, dateTo : string}) : Observable<any>{
    return this._http.get<any>(this.purchaseURL, {params: parameters})
  }

  getTaxes(): Observable<Tax[]> {
    return this._http.get<Tax[]>(this.taxURL);
  }

  removeTax(id : number): Observable<any> {
    return this._http.delete<any>(this.taxURL + "/?id=" + id, httpOptions)
  }

  getCategory(): Observable<any[]> {
    return this._http.get<any[]>(this.categoryURL);
  }

  getOffers(): Observable<any[]> {
    return this._http.get<any[]>(this.offerURL);
  }

  getUsers(): Observable<any[]> {
    return this._http.get<any[]>(this.userURL)
  }

}
