import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/announcement', pathMatch: 'full'},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)
  },
  {
    path: 'announcement',
    loadChildren: () => import('./announcement/announcement.module')
      .then(mod => mod.AnnouncementModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
