export class Articulo {
    id:number;
    codigo:number;
    nombre:String;
    descripcion:String;
    rubro:String;
    precio_de_compra:number;
    precio_de_venta_de_lista:number;
    cantidad_en_stock:number;

    constructor(values:Object={})
    {
        Object.assign(this,values);
    }
}
