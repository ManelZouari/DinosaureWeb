import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinosaureComponent } from './dinosaure/dinosaure.component';
import { SignUpComponent } from './dinosaure/sign-up/sign-up.component';
import { LoginComponent } from './dinosaure/login/login.component';
import { DinosaureProfileComponent } from './dinosaure-profile/dinosaure-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { EditProfileComponent } from './dinosaure/edit-profile/edit-profile.component';
import { ListFriendComponent } from './Friend/list-friend/list-friend.component';
import { AddnewfriendComponent } from './Friend/addnewfriend/addnewfriend.component';

const routes: Routes = [
  {
    path: 'signup' , component: DinosaureComponent,
    children: [ { path: '', component: SignUpComponent}]

  },
  {
    path: 'login' , component: DinosaureComponent,
    children: [ { path: '', component: LoginComponent}]

  },
  {
    path: 'profile/:login' , component: DinosaureProfileComponent, canActivate: [AuthGuard]

  },

  {
    path: 'EditProfile' , component: EditProfileComponent, canActivate: [AuthGuard]

  },
  {
    path: 'FriendList' , component: ListFriendComponent, canActivate: [AuthGuard]

  },
  {
    path: 'Addnewfriend' , component: AddnewfriendComponent , canActivate: [AuthGuard]

  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
