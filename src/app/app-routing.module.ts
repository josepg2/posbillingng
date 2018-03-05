import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ItemsComponent } from './components/items/items.component';
import { BillingComponent } from './components/billing/billing.component';
import { BillhistoryComponent } from './components/billhistory/billhistory.component'

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'newbill', component: BillingComponent},
  {path: 'billhistory', component: BillhistoryComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
