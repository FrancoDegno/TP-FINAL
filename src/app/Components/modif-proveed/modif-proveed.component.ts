import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Class/proveedor';
import { ProveedorService } from 'src/app/Services/proveedor.service';

@Component({
  selector: 'app-modif-proveed',
  templateUrl: './modif-proveed.component.html',
  styleUrls: ['./modif-proveed.component.css']
})
export class ModifProveedComponent implements OnInit {

  my_prov:Proveedor={
    id:null,
    nombre:"",
    direccion:"",
    localidad:"",
    telefono:"",
    cuit:""
  }


  constructor(private _service:ProveedorService) { }

  ngOnInit() {
  }

  postProv(){
    this._service.add(this.my_prov).subscribe(
      prov=>{
        
      }
    )
  }
}
