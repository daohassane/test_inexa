import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnnouncementComponent} from "./announcement.component";

const routes: Routes = [
  {
    path: '', component: AnnouncementComponent, children: [
      {
        path: '',
        loadChildren: () => import('./list/list.module')
          .then(mod => mod.ListModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./detail/detail.module')
          .then(mod => mod.DetailModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule {
}
