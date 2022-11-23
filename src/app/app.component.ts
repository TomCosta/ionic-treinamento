import { AuthService } from './services/auth-service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkServiceService } from './services/on-off/network.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Fish', url: '/fish-page', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  constructor(
    private netServ: NetworkServiceService,
    private authService: AuthService,
    private route: Router
  ) {
    this.recoverOffline();
  }

  recoverOffline() {
    this.netServ.checkNetwork();
  }

  logout() {
    this.authService.logout().then(()=> {
      this.route.navigate(['login']);
      console.log('Saiu... 🏃🏾‍♂️​');
    })
  }
}
