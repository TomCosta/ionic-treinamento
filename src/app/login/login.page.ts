import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
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
    private alertController: AlertController,
		private authService: AuthService,
    private menuCtrl: MenuController,
    public fb: FormBuilder,
    private route: Router
  ){    
  }

  ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  // Acesso fácil aos campos do form
	get email() {
		return this.signinForm.get('email');
	}

	get password() {
		return this.signinForm.get('password');
	}

  async login() {
		const user = await this.authService.login(this.signinForm.value);
		if (user) {
      this.route.navigateByUrl('/fish-page', { replaceUrl: true });
		} else {
			this.showAlert('O login falhou', 'tente novamente!');
      this.route.navigateByUrl('/login', { replaceUrl: true });
		}
	}

	async register() {
		const user = await this.authService.register(this.signinForm.value);
		if (user) {
			this.route.navigateByUrl('/fish-page', { replaceUrl: true });
		} else {
			this.showAlert('O registro falhou', 'tente novamente!');
		}
	}

  async showAlert(header, message) {
		const alert = await this.alertController.create({
			header,
			message,
			buttons: ['Entendi']
		});
		await alert.present();
  }

  ionViewDidLeave(): void {
    this.menuCtrl.enable(true);
  }
}
