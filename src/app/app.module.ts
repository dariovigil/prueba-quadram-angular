import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { ShopsListComponent } from './shops-list/shops-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
