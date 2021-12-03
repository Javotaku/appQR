import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    const noControlInt = localStorage.getItem('noCtrl');
    this.noCtrl =  noControlInt;
    this.value = noControlInt;
  }

}
