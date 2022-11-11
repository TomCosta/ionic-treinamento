import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signinForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    public fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
  }

  // Acesso fácil aos campos do form
	get email() {
		return this.signinForm.get('email');
	}

	get password() {
		return this.signinForm.get('password');
	}


  async loginUser(userName: any, userPsw: any) {
    console.log('loginUser: ', userName, userPsw);
    this.route.navigate(['fish-page']);
  }

  register(){
    console.log('register');
    this.route.navigate(['fish-page']);
  }

}
