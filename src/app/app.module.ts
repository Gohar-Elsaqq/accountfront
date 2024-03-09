import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddSystemTypeComponent } from './add/add-system-type/add-system-type.component';
import { AddAparmentComponent } from './Aparment/add-aparment/add-aparment.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAparmentComponent,
    AddSystemTypeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
