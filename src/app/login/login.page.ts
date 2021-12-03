import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  noCtrl = '';
  password = '';

  constructor(
    private loginService: ApiService,
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async showToast(){
    const toast = await this.toastController.create({
      color: 'danger',
      message: 'Las credenciales ingresadas son incorrectas',
      duration: 2000
    });
    toast.present();
  }

  goRegister() {
    this.router.navigateByUrl('/register');
  }

  async login(){
    try{
      const {status, token}: any = await this.loginService.getLoginUser({noCtrl: (this.noCtrl+""), password: this.password});
      if(!status){
        await this.showToast();
        throw new Error('Credenciales incorrectas');
      }

      localStorage.setItem('token', token);
      localStorage.setItem('noCtrl', this.noCtrl);

      this.router.navigateByUrl('/folder/Inbox');

    } catch (e){
      await this.showToast();
      console.log('Error al hacer el login: ', e);
    }
  }

}
