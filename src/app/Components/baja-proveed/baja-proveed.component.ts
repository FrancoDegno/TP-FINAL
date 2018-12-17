import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/Services/proveedor.service';

@Component({
  selector: 'app-baja-proveed',
  templateUrl: './baja-proveed.component.html',
  styleUrls: ['./baja-proveed.component.css']
})
export class BajaProveedComponent implements OnInit {

  constructor(private _service:ProveedorService) { }

  ngOnInit() {
  }


  delete(id:number)
  {
    this._service.delete(id).subscribe
    (art=>{
      
    })
  }

}
