import React, { useState } from 'react';
import '../estilos/carrinho.css'; // Importa o CSS separado

interface Dish {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Carrinho: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([
    { id: 1, name: 'Prato 1', price: 25.0, quantity: 1 },
    { id: 2, name: 'Prato 2', price: 30.0, quantity: 2 },
    { id: 3, name: 'Prato 3', price: 20.0, quantity: 1 },
  ]);

  const [address, setAddress] = useState<string>('');
  const [paymentInfo, setPaymentInfo] = useState<string>('');

  const handleQuantityChange = (id: number, quantity: number) => {
    setDishes((prevDishes) =>
      prevDishes.map((dish) =>
        dish.id === id ? { ...dish, quantity: Math.max(0, quantity) } : dish
      )
    );
  };

  const total = dishes.reduce((sum, dish) => sum + dish.price * dish.quantity, 0);

  const handleConfirmOrder = () => {
    console.log('Pedido confirmado:', { dishes, address, paymentInfo });
    alert('Pedido confirmado!');
  };

  return (
    <div className="container">
      {/* Dados do cliente e pagamento */}
      <div className="card">
        <h2 className="title">Dados do Cliente</h2>
        <div className="mb-4">
          <label className="label">Endereço de Entrega</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="textarea"
            rows={3}
            placeholder="Digite o endereço de entrega"
          />
        </div>

        <h2 className="title">Pagamento</h2>
        <div className="mb-4">
          <label className="label">Informações de Pagamento</label>
          <input
            type="text"
            value={paymentInfo}
            onChange={(e) => setPaymentInfo(e.target.value)}
            className="input"
            placeholder="Digite os dados do pagamento"
          />
        </div>

        <div className="total">
          <span>Total:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>

        <button onClick={handleConfirmOrder} className="confirm-button">
          Confirmar Pedido
        </button>
      </div>

      {/* Lista de pratos selecionados */}
      <div className="card">
        <h2 className="title">Carrinho de Compras</h2>
        <div className="cart-list">
          {dishes.map((dish) => (
            <div key={dish.id} className="cart-item">
              <div>
                <h3 className="cart-item-title">{dish.name}</h3>
                <p className="cart-item-price">R$ {dish.price.toFixed(2)}</p>
              </div>
              <div className="quantity-controls">
                <button
                  onClick={() => handleQuantityChange(dish.id, dish.quantity - 1)}
                  className="quantity-button"
                >
                  -
                </button>
                <input
                  type="number"
                  value={dish.quantity}
                  onChange={(e) =>
                    handleQuantityChange(dish.id, parseInt(e.target.value, 10))
                  }
                  className="quantity-input"
                  min={0}
                />
                <button
                  onClick={() => handleQuantityChange(dish.id, dish.quantity + 1)}
                  className="quantity-button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
