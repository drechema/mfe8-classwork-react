export interface CabeceraPedido {
    dato1: string;
    dato2: string;
}

export interface LineaPedido {
    descripcion: string;
}

export interface Pedido {
    cabecera: CabeceraPedido;
    lineas: LineaPedido[];
}