import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StaticdataholdingService {

  taxes : any[] = [];
  category : any[] = [];
  offers : any[] = [];

  taxURL : string = 'http://localhost:3000/api/tax';
  categoryURL : string = 'http://localhost:3000/api/category';
  offerURL : string = 'http://localhost:3000/api/offers';

  constructor(private _http: HttpClient) {
    this._http.get<any>(this.taxURL).subscribe(items => {
      this.taxes = items;
    });
    this._http.get<any>(this.categoryURL).subscribe(items => {
      this.category = items;
    });
    this._http.get<any>(this.offerURL).subscribe(items => {
      this.offers = items;
    });
  }

  getTaxes(){
    return this.taxes;
  }

  getCategory(){
    return this.category;
  }

  getOffers(){
    return this.offers;
  }

}
