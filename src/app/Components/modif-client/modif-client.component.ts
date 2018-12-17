import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Class/cliente';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-modif-client',
  templateUrl: './modif-client.component.html',
  styleUrls: ['./modif-client.component.css']
})
export class ModifClientComponent implements OnInit {

  my_client:Cliente={
    id:null,
    nombre:"",
    apellido:"",
    direccion:"",
    telefono:"",
    cuil:""
  }


  constructor(private _service:ClienteService) { }

  ngOnInit() {
  }

  postClient(){
    this._service.modif(this.my_client).subscribe(
      cli=>{
        
      }
    )
  }
}
