import { NgSharedComponent } from './../../projects/ng-shared/src/lib/ng-shared.component';
import { TodosService } from './todos/todos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NgSharedModule } from 'ng-shared';
import {StoreModule} from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgSharedModule,
    StoreModule.forRoot({count: counterReducer}),

  ],
  providers: [],
  // providers: [{provide: TodosDService, useClass: TodosDService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
