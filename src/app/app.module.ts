import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    InventoryComponent,
    InventorypaginationComponent,
    ItemsComponent,
    ItemspaginationComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [InventorydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
