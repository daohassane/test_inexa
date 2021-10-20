import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', loadChildren: () => import('./list/list.module')
          .then(mod => mod.ListModule)
      },
      {
        path: 'update/:id', loadChildren: () => import('./update/update.module')
          .then(mod => mod.UpdateModule)
      },
      {
        path: 'create', loadChildren: () => import('./add/add.module')
          .then(mod => mod.AddModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
