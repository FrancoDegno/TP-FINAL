import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../Class/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {


  url:string='http://localhost:3002';
  clientes:Factura[];
  
    constructor(private _http:HttpClient) {
      this.clientes=[];
     }
  
     add(f:Factura):Observable<Factura>
     {
      return this._http.post<Factura>(this.url+'add_fac',f);
     }

     list():Observable<Factura[]>
     {
       return this._http.get<Factura[]>(this.url+'/'+'list_fac');
     }
    }
  