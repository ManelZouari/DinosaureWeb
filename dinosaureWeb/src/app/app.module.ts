import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinosaureComponent } from './dinosaure/dinosaure.component';
import { SignUpComponent } from './dinosaure/sign-up/sign-up.component';
import { DinosaureProfileComponent } from './dinosaure-profile/dinosaure-profile.component';
import { LoginComponent } from './dinosaure/login/login.component';
import { DinosaureService } from './service/dinosaure.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EditProfileComponent } from './dinosaure/edit-profile/edit-profile.component';
import { ListFriendComponent } from './Friend/list-friend/list-friend.component';
import { FriendsService } from './service/friends.service';
import { AddnewfriendComponent } from './Friend/addnewfriend/addnewfriend.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaureComponent,
    SignUpComponent,
    DinosaureProfileComponent,
    LoginComponent,
    EditProfileComponent,
    ListFriendComponent,
    AddnewfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, DinosaureService,FriendsService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
