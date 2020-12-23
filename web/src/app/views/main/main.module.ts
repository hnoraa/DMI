import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
