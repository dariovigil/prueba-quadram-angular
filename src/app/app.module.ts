import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent,
    ShopCardComponent,
    SectionHeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
