import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardModule} from "../dashboard/dashboard.module";
import {AnnouncementModule} from "../announcement/announcement.module";
import { NotFoundComponent } from '../not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [

    NotFoundComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
    AnnouncementModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
