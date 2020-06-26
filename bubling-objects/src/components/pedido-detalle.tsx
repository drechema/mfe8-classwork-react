import React from "react";
import { Pedido } from "./model";
import { PedidoLinea } from "./pedido-linea";

interface Props {
  pedido: Pedido;
  onCambios: (pedido: Pedido) => void;
}

export const PedidoDetalle: React.FC<Props> = (props: Props) => {
  return (
    <>
      <h3>DETALLE</h3>
      <div>
        <button
          onClick={() => {
            props.pedido.lineas.push({ descripcion: "nueva linea" });
            props.onCambios(props.pedido);
          }}
        >
          Add linea
        </button>
        <ul>
          {props.pedido.lineas.map((linea, index) => (
            <li key={index}>
              <PedidoLinea linea={linea}></PedidoLinea>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
