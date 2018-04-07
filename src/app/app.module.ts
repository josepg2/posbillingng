import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventorydataService } from './services/inventorydata.service';
import { InventorypaginationComponent } from './components/inventorypagination/inventorypagination.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemspaginationComponent } from './components/itemspagination/itemspagination.component';
import { BillingComponent } from './components/billing/billing.component';
import { BillhistoryComponent } from './components/billhistory/billhistory.component';
import { BillhistorypaginationComponent } from './components/billhistorypagination/billhistorypagination.component';
import { DeterminePipe } from './pipes/determine.pipe';
import { OfferPipe } from './pipes/offer.pipe';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PurchasehistoryComponent } from './components/purchasehistory/purchasehistory.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    InventoryComponent,
    InventorypaginationComponent,
    ItemsComponent,
    ItemspaginationComponent,
    BillingComponent,
    BillhistoryComponent,
    BillhistorypaginationComponent,
    DeterminePipe,
    OfferPipe,
    PurchaseComponent,
    PurchasehistoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    NgDatepickerModule
  ],
  providers: [InventorydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
