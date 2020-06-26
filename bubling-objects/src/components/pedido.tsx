import React from "react";
import { Pedido } from "./model";
import { PedidoCabecera } from "./pedido-cabecera";
import { PedidoDetalle } from "./pedido-detalle";

export const PedidoComponent = (Props) => {
  const [pedido, setPedido] = React.useState({
    cabecera: {
      dato1: "Soy el dato 1",
      dato2: "Soy el dato 2",
    },
    lineas: [
      { descripcion: "linea 1" },
      { descripcion: "linea 2" },
      { descripcion: "linea 3" },
      { descripcion: "linea 4" },
    ],
  });

  React.useEffect(() => {
    console.log("hay useEffect");
  }, [pedido]);

  return (
    <>
      <PedidoCabecera pedido={pedido} />
      <PedidoDetalle
        pedido={pedido}
        onCambios={(pedido: Pedido) => {
          console.log("hay onCcambios");
          setPedido(pedido);
          /* setPedido({...pedido}); */
        }}
      />
    </>
  );
};
