import { useContext, useEffect, useState } from 'react';
import CartContext from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { Button } from '../button/Button';
import { FormInfo } from '../info/formInfo';

export const CartCheck = () => {
  const [showModalFormInfo, setShowModalFormInfo] = useState(false);

  const {
    addItem,
    IdproductSelect,
    setIdProductSelect,
    setQtdSelected,
    qtdSelected,
    dataItemBuy,
    finalPrice,
    clearCart,
    removeSelectedCart,
  } = useContext(CartContext);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h1 className="text-3xl text-gray-900 font-bold my-4">Seu pedido:</h1>
        </div>
        <div className="mt-8 text-gray-900">
          {dataItemBuy.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row border-b border-gray-400 py-4"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    <div className="mt-10 flex items-center">
                      <span className="mr-2 text-gray-600">
                        Quantidade comprada: {item.qtd}
                      </span>
                      <span className="ml-auto font-bold">
                        R$ {item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {Object.keys(dataItemBuy).length !== 0 ? (
          <div className="flex justify-end items-center mt-8">
            <span className="text-gray-600 font-bold text-2xl mr-4">
              {/* Subtotal: R$ {finalPrice.toFixed(2) || ''} */}
            </span>
            <div> </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
