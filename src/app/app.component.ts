import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Escanea tu QR', url: '/folder/Inbox', icon: 'qr-code' },
    { title: 'Mis accesos', url: '/folder2/Inbox', icon: 'list' },
    { title: 'Cerrar sesion', url: '/login', icon: 'log-out' },
  ];

  noCtrl: any;

  constructor() {}

  ngOnInit() {
    this.noCtrl = localStorage.getItem('noCtrl');
  }
}
