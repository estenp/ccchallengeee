import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FollowerDetailComponent } from './follower-list/follower-detail/follower-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FollowerListComponent
  },
  {
    path: 'followers/:id',
    component: FollowerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowersRoutingModule { }
