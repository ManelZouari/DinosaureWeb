import { Component, OnInit } from '@angular/core';
import { DinosaureService } from '../../service/dinosaure.service';
import { FriendsService } from '../../service/friends.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-addnewfriend',
  templateUrl: './addnewfriend.component.html',
  styleUrls: ['./addnewfriend.component.css']
})
export class AddnewfriendComponent implements OnInit {
  serverMessages: any;
  serverErrorMessages: any;

  constructor(private dinosaureService: DinosaureService, private friendsService: FriendsService, private router:Router) { }

  ngOnInit() {
  }


  Back(){
    this.router.navigateByUrl('/FriendList');
  }


  onSubmit(form: NgForm ) {
    this.dinosaureService.postUser(form.value).subscribe(
      res => {

console.log(form.value['login']);
        this.friendsService.postFriend(localStorage.getItem('login'), form.value['login']).subscribe(

          result => {

            this.serverMessages=result.message;

          },

          err => {
            this.serverErrorMessages = err.error.error;
          }
        );





      },

      err => {
        this.serverErrorMessages = err.error.error;
      }
    );



  }

}
