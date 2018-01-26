import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { ShopCardComponent } from './shop-card/shop-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent,
    ShopCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
