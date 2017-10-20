import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { StatusFilterPipe } from './status-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatusFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
