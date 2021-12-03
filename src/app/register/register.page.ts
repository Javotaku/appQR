import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  noCtrl: any;
  name = '';
  password = '';

  correo1: string = "alu.";
  correo2: string = "@correo.itlalaguna.edu.mx";
  email: string = this.correo1 + this.correo2;

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
      message: 'Usuario ya registrado',
      duration: 2000
    });
    toast.present();
  }

  async registrarAlumno(){
    try{
      //const {status, token}: any = await this.loginService.getLoginUser({noCtrl: (this.noCtrl+""), password: this.password});
      const {status, message }: any = await this.loginService.addUser({noCtrl: (this.noCtrl+""), name: this.name, email: this.email, password: (this.password+"")});
      if(!status){
        await this.showToast();
        throw new Error('Credenciales incorrectas');
      }

      const toast = await this.toastController.create({
        color: 'success',
        message: 'Usuario registrado exitosamente',
        duration: 3000
      });
      toast.present();
      
      this.router.navigateByUrl('/home');

    } catch (e){
      await this.showToast();
      console.log('Error al hacer el login: ', e);
    }
  }

  getNoCtrl() {
    const dato = "x";
    if(this.noCtrl)
      this.email = this.correo1 + this.noCtrl + this.correo2;
    else
      this.email = this.correo1 + dato + this.correo2;
  }

}
