import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialsComponent } from './socials.component';

const routes: Routes = [{ path: '', component: SocialsComponent }, { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) }, { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialsRoutingModule { }
