import { useContext, useEffect, useState } from 'react';
import CartContext from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { Button } from '../button/Button';

export const Cart = () => {
  const [showModalFormInfo, setShowModalFormInfo] = useState(false);

  const {
    setQtdSelected,
    dataItemBuy,
    finalPrice,
    clearCart,
    removeSelectedCart,
  } = useContext(CartContext);

  return (
    <>
      <div className="container mx-auto px-4 py-8 main">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-3xl text-gray-900 font-bold my-4">
            Carrinho de compras
          </h1>

          <Link
            className="bg-gray-900 justify-end float-right ml-auto hover:bg-gray-700 mr-5 text-white font-bold py-2 px-4 rounded"
            to="/"
          >
            Voltar
          </Link>
        </div>
        <div className="mt-8 text-gray-900">
          {Object.keys(dataItemBuy).length === 0 ? (
            <p className="text-1xl">
              O Carrinho está vazio :(.
              <br /> Visite a página e compre algum produto{' '}
              <Link to="/">clicando aqui</Link>
            </p>
          ) : (
            dataItemBuy.map((item) => {
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
                        <ItemCount
                          stock={item.qtd}
                          id={item.id}
                          qtdSelected={setQtdSelected}
                        />
                        <button
                          onClick={() => removeSelectedCart(item.id)}
                          className="bg-red-700 p-2 text-white ml-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                              fill="white"
                            ></path>{' '}
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              fill="white"
                            ></path>{' '}
                          </svg>
                        </button>
                        <span className="ml-auto font-bold">
                          R$ {item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
        {Object.keys(dataItemBuy).length !== 0 ? (
          <div className="flex justify-end items-center mt-8">
            {Object.keys(dataItemBuy).length !== 0 ? (
              <button
                onClick={clearCart}
                className="bg-red-700 mr-auto hover:bg-red-900 mr-5 text-white font-bold py-2 px-4 rounded"
              >
                Limpar Carrinho
              </button>
            ) : (
              ''
            )}
            <span className="text-gray-600 font-bold text-2xl mr-4">
              Subtotal: R$ {finalPrice + ',00'}
            </span>
            <div> </div>
          </div>
        ) : (
          ''
        )}
        <div className="mt-20">
          {Object.keys(dataItemBuy).length !== 0 ? (
            <Link to={'/formInfo'}>
              <Button
                value="Finalizar compra"
                action={() => {
                  setShowModalFormInfo(true);
                }}
              />
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};
