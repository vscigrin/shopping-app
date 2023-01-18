import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopListComponent } from './shop-list/shop-list.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: ShopListComponent },
  { path: 'add-shop', component: AddShopComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
