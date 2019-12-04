import { Component, OnInit } from '@angular/core';
import { Friend } from '../../model/friend.model';
import { FriendsService } from '../../service/friends.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-friend',
  templateUrl: './list-friend.component.html',
  styleUrls: ['./list-friend.component.css']
})
export class ListFriendComponent implements OnInit {

  public manel: Friend = {
    login: 'maha',
    friend: 'mannou',
  };

public size = 0;
public frnd: string;



  public friends: Friend[]=[] ;
 // showSucessMessage: boolean;
  serverErrorMessages: string;
  serverMessages: any;




  constructor(private friendsService: FriendsService, private router:Router) { }

  ngOnInit() {

this.getFriends();


  }


  delFrnd(form:NgForm){
    this.serverMessages='';
    //console.log( form.value['delfrnd']);
    this.friendsService.delFriend( localStorage.getItem('login'), form.value['delfrnd']).subscribe(
      res => {
        this.showSucessMessage = true;
        this.getFriends();
      },

      err => {
        this.serverErrorMessages = err.error.error;
      }

    );
  }


  Back(){
    this.router.navigateByUrl('/profile/' + localStorage.getItem('login'));
  }

  addnewfriend(){

    this.router.navigateByUrl('/Addnewfriend');
  }


  onSubmit(form: NgForm){
    // console.log( form.value['friend']);
    this.friendsService.postFriend(localStorage.getItem('login'), form.value['friend']).subscribe(

      res => {

        this.serverMessages=res.message;
        this.getFriends();
      },

      err => {
        this.serverErrorMessages = err.error.error;
      }
    );



  }



  getFriends()
  {
    this.friendsService.getFriends(localStorage.getItem('login')).subscribe(
      res => {

        this.friends=res;
        this.size = this.friends.length;





      },
      err  => {
        console.log(err);
      }
    );

  }
}
