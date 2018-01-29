import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SearchComponent } from './search/search.component';
import { LikesComponent } from './likes/likes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';
import { DistanceService } from './services/distance.service';
@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent,
    ShopCardComponent,
    SectionHeaderComponent,
    SearchComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    StarRatingModule.forRoot()
  ],
  providers: [DataService, DistanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
