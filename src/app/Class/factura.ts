import { Articulo } from "./articulo";
import { Proveedor } from "./proveedor";
import { Cliente } from "./cliente";

export class Factura {
    id:number;
    pto_venta:number;
    num_correlativo:number;
    fecha:Date;
    tipo:String;
    total_comprado:number;
    proveedor:Proveedor;
    cliente:Cliente;
    lista_de_items:Articulo[];


    constructor(values:Object={}){
        Object.assign(this,values);
  }

}



