import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-baja-client',
  templateUrl: './baja-client.component.html',
  styleUrls: ['./baja-client.component.css']
})
export class BajaClientComponent implements OnInit {

  constructor(private _service:ClienteService) { }

  ngOnInit() {
  }

  delete(id:number)
  {
    this._service.delete(id).subscribe
    (art=>{
      
    })
  }


}
