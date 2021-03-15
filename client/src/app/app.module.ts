import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadDirectoryComponent } from './components/read-directory/read-directory.component';
import { DirectoryItemComponent } from './components/directory-item/directory-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadDirectoryComponent,
    DirectoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
