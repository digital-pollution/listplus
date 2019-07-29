import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {
        IonicApp,
        IonicModule,
        IonicRouteStrategy
      } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule }   from '@angular/forms';

import { AddItemPage } from './add-item/add-item.page';
import { ItemDetailPage } from './item-detail/item-detail.page';

@NgModule({
  declarations: [
    AppComponent,
    AddItemPage,
    ItemDetailPage
  ],
  entryComponents: [
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
