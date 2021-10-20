import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ListModule } from './list/list.module';
import { AddModule } from './add/add.module';
import { UpdateModule } from './update/update.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ListModule,
    AddModule,
    UpdateModule,

  ]
})
export class DashboardModule { }
