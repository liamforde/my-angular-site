import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemaRoutingModule } from './schema-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SchemaRoutingModule
  ]
})
export class SchemaModule { }
