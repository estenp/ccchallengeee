import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FollowerDetailComponent } from './follower-list/follower-detail/follower-detail.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user/:username',
    component: UserComponent
  },
  {
    path: 'user/:username/followers/:id',
    component: FollowerDetailComponent
  },
  {
    path: '',
    component: UserComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
