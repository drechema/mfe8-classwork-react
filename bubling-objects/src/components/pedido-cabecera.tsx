import React from "react";
import { Pedido } from "./model";

interface Props {
  pedido: Pedido;
}

export const PedidoCabecera: React.FC<Props> = (props: Props) => {
  return (
    <>
    <div>
      <h3>CABECERA</h3>
      <div>{props.pedido.cabecera.dato1}</div>
      <div>{props.pedido.cabecera.dato2}</div>
      <div>Total: {props.pedido.lineas.length} lineas</div>
      </div>
    </>
  );
};