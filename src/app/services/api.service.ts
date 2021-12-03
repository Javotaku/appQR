import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getLoginUser(data){
    console.log(data);
    return this.httpClient.post(`https://api-sp-project.herokuapp.com/api/login`, data).toPromise();
  }

  addUser(data){
    console.log(data);
    return this.httpClient.post(`https://api-sp-project.herokuapp.com/api/student`, data).toPromise();
  }

  getQrCode(noCtrl) {
    return this.httpClient.get(`https://api-sp-project.herokuapp.com/api/qr?noCtrl=${noCtrl}&width=250&margin=1`).toPromise();   
  }
  
  getMyAccess(noCtrl) {
    return this.httpClient.get(`https://api-sp-project.herokuapp.com/api/access-log?to=100&noCtrl=${noCtrl}`).toPromise();
  }
}
