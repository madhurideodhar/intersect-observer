import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleMatTableComponent } from './simple-mat-table/simple-mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { ViewDirective } from './simple-mat-table/view.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMatTableComponent,
    ViewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
