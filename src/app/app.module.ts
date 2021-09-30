import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UsersModule} from "./features/users/users.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {effects, metaReducers, reducers} from "./store";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UsersModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(effects),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
