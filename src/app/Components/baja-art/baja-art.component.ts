import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/Services/articulo.service';

@Component({
  selector: 'app-baja-art',
  templateUrl: './baja-art.component.html',
  styleUrls: ['./baja-art.component.css']
})
export class BajaArtComponent implements OnInit {

  constructor(private _service:ArticuloService ) { }

  ngOnInit() {
  }

  delete(id:number)
  {
    this._service.delete(id).subscribe
    (art=>{
      
    })
  }

}
