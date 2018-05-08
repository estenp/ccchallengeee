import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FollowerDetailComponent } from './user/follower-list/follower-detail/follower-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:username',
    component: UserComponent,
    data: { view: 'followerList' }
  },
  {
    path: 'user/:username/followers/:followername',
    component: UserComponent,
    data: { view: 'followerDetail' }
  },
  {
    path: '**',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
