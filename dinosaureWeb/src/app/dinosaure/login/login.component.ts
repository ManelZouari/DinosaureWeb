import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { DinosaureService } from '../../service/dinosaure.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    login : '',
    password: ''
  };
  serverErrorMessages: string;
  constructor(private dinosaureService: DinosaureService, private router:Router) { }


  ngOnInit() {
  }


  onSubmit(form : NgForm){
    const login = form.value['login'];
    const password = form.value['password'];
    this.dinosaureService.login(login, password).subscribe(
      res => {
        this.dinosaureService.setToken(res['token']);
        localStorage.setItem('login', login);
        this.router.navigateByUrl('/profile/'+ login);
      },
      err => {
        this.serverErrorMessages = err.error.error;

      }
    );
  }

}
