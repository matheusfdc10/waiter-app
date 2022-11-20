import { useEffect } from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { formatCurrency } from "../../utils/formatCurrency";
import { Order } from "../types/Order";
import { Overlay } from "./style";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  isLoading: boolean;
  onChangeOrderStatus: () => void;
}

export function OrderModal({
  visible,
  order,
  onClose,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus,
}: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onclose]);

  if (!visible || !order) {
    return null;
  }

  // let total = 0
  // order.products.forEach(({product, quantity}) => {
  //     total += product.price * quantity
  // })

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <div className="modal-body">
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="icone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕑"}
              {order.status === "IN_PRODUCTION" && "👩‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em preparação"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <div className="order-details">
          <strong>Itens</strong>

          <div>
            {order.products.map((intem) => (
              <div className="item" key={intem._id}>
                <img
                  src={`http://localhost:3001/uploads/${intem.product.imagePath}`}
                  alt={intem.product.name}
                  width="56"
                  height="28.51"
                />

                <span>{intem.quantity}x</span>
                <div>
                  <strong>{intem.product.name}</strong>
                  <span>{formatCurrency(intem.product.price)}</span>
                </div>
              </div>
            ))}

            <div className="total">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </div>
        </div>

        <footer>
          {order.status != "DONE" && (
            <button
              type="button"
              className="primary"
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === "WAITING" && "👩‍🍳"}
                {order.status === "IN_PRODUCTION" && "✅"}
              </span>
              <strong>
                {order.status === "WAITING" && "Iniciar Produção"}
                {order.status === "IN_PRODUCTION" && "Concluir Pedido"}
              </strong>
            </button>
          )}
          <button
            type="button"
            className="secundary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar Pedido
          </button>
        </footer>
      </div>
    </Overlay>
  );
}
