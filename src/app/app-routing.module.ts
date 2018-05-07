import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module'

const routes: Routes = [
  {
    path: 'usersearch',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '',
    redirectTo: '/usersearch',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
