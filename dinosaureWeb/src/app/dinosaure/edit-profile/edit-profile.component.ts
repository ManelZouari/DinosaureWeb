import { Component, OnInit } from '@angular/core';
import { DinosaureService } from '../../service/dinosaure.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Dinosaure } from '../../model/dinosaure.model';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  dinosaureDetails;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private dinosaureService:DinosaureService, private router:Router ) { }



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


  Back(){
    this.router.navigateByUrl('/profile/' + this.dinosaureDetails.login);
  }

  onSubmit(form: NgForm ) {


    const newDinosaure: Dinosaure = {
      login: this.dinosaureDetails.login,
      password: '',
      age: form.value['age'],
      famille: form.value['famille'],
      race: form.value['race'],
      nourriture: form.value['nourriture']
    };

    this.dinosaureService.postEditUser(newDinosaure).subscribe(
      res => {
        this.showSucessMessage = true;
      },

      err => {
        this.serverErrorMessages = err.error.error;
      }
    );



  }


}



