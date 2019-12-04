import { Component, OnInit } from '@angular/core';
import { DinosaureService } from '../../service/dinosaure.service';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

})
export class SignUpComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private dinosaureService: DinosaureService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm ) {
    this.dinosaureService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
      },

      err => {
        this.serverErrorMessages = err.error.error;
      }
    );



  }

}
