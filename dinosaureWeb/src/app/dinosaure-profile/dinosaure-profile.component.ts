import { Component, OnInit } from '@angular/core';
import { DinosaureService } from '../service/dinosaure.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dinosaure-profile',
  templateUrl: './dinosaure-profile.component.html',
  styleUrls: ['./dinosaure-profile.component.css']
})
export class DinosaureProfileComponent implements OnInit {
dinosaureDetails;
  constructor(private dinosaureService: DinosaureService, private router: Router) { }

  ngOnInit() {

      this.dinosaureService.getDinosaureProfile().subscribe(
        res => {
          console.log(res);
          this.dinosaureDetails = res['dinosaure'];
        },
        err  => {
          console.log(err);
        }
      );
  }

  onLogout(){
    this.dinosaureService.deleteStorage();

    this.router.navigate(['/login']);
  }




  onEdit(){
    //localStorage.setItem('login', this.dinosaureDetails.login);
    this.router.navigate(['/EditProfile']);

  }

  onFriendList(){
   // localStorage.setItem('login', this.dinosaureDetails.login);
    this.router.navigate(['/FriendList']);

  }
}




