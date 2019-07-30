import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {
        IonApp,
        IonicModule,
        IonicRouteStrategy
      } from '@ionic/angular';

import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AddItemPage } from './add-item/add-item.page';
import { ItemDetailPage } from './item-detail/item-detail.page';
import { ItemDetailPageModule } from './item-detail/item-detail.module';
import { DataService } from './data.service';
import { DatePickerModule } from 'ionic4-date-picker';

@NgModule({
  declarations: [
    AppComponent,
    AddItemPage
  ],
  entryComponents: [
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ItemDetailPageModule,
    DatePickerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
