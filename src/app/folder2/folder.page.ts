import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  noCtrl : string = "hola";
  elementType = 'url';
  value = 'Techiediaries';
  accessArray = [];

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    const noControlInt = localStorage.getItem('noCtrl');
    this.noCtrl =  noControlInt;
    this.value = noControlInt;
    this.getAccesos();
  }

  async getAccesos(){
    try{
      const noCtrl = localStorage.getItem('noCtrl');
      const objeto: any = await this.apiService.getMyAccess(noCtrl);
      this.accessArray = objeto.data;
      moment.locale('es-us'); 
      for(let log of this.accessArray)
        {
          log.dateTime = moment(log.dateTime).format('LLL');
        }
      console.log("mis accesos:", this.accessArray);
    } catch (e){
      console.log('Error al obtener codigo qr: ', e);
    }
  }

}
