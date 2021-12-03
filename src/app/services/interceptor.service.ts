import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(req.url.includes('https://api-sp-project.herokuapp.com/api/')){
      const token = localStorage.getItem('token')
        req = req.clone({
          headers: new HttpHeaders({ 
                                     'token': `${token}`
                                    })
        });
    }
    return next.handle(req);
  }
}