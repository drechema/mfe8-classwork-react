import React from "react";
import { LineaPedido } from "./model";

interface Props {
  linea: LineaPedido;
}

export const PedidoLinea: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div>{props.linea.descripcion}</div>
    </>
  );
};
