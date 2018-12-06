import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DalamComponent } from './dalam/dalam.component';
import { LuarComponent } from './luar/luar.component';

import { DalamListComponent } from './dalam/dalam-list/dalam-list.component';
import { DalamDetailComponent } from './dalam/dalam-detail/dalam-detail.component';
import { DalamItemComponent } from './dalam/dalam-list/dalam-item/dalam-item.component';
import { DalamEditComponent } from './dalam/dalam-edit/dalam-edit.component';

import { LuarListComponent } from './luar/luar-list/luar-list.component';
import { LuarDetailComponent } from './luar/luar-detail/luar-detail.component';
import { LuarItemComponent } from './luar/luar-list/luar-item/luar-item.component';
import { LuarEditComponent } from './luar/luar-edit/luar-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      DalamComponent,
      LuarComponent,
      DalamListComponent,
      DalamDetailComponent,
      DalamItemComponent,
      DalamEditComponent,
      LuarListComponent,
      LuarDetailComponent,
      LuarItemComponent,
      LuarEditComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
