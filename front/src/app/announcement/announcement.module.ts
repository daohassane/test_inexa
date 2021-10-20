import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';
import { AnnouncementComponent } from './announcement.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    ListModule,
    DetailModule,
  ]
})
export class AnnouncementModule { }
