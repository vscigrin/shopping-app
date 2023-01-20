import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartComponent } from './start/start.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
    declarations: [
        AppComponent,
        ShopListComponent,
        AddShopComponent,
        ProductListComponent,
        AddProductComponent,
        StartComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
