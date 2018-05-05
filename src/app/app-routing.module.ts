import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersModule } from './followers/followers.module'

const routes: Routes = [
  {
    path: 'followers',
    loadChildren: './followers/followers.module#FollowersModule'
  },
  {
    path: '',
    redirectTo: '/followers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
