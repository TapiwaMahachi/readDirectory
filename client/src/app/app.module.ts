import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirentComponent } from './components/dirent/dirent.component';
import { DirentItemComponent } from './components/dirent-item/dirent-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DirentComponent,
    DirentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
