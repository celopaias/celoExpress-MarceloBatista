import { useState, useEffect } from 'react';
import CartContext from '../contexts/CartContext';
import { useParams } from 'react-router-dom';
export default function CartProvider({ children }) {
  const [qtdSelected, setQtdSelected] = useState();
  const [dataItemBuy, setDataItemBuy] = useState({});
  const [IdproductSelect, setIdProductSelect] = useState();

  useEffect(() => {
    console.log(dataItemBuy);
  });

  const addItem = (item) => {
    setDataItemBuy([
      {
        id: item.id,
        name: item.title,
        description: item.description,
        price: item.price,
        qtd: qtdSelected,
      },
    ]);
    const alreadyExist =
      dataItemBuy.filter((listItem) => listItem.id === item.id).length > 0;

    if (alreadyExist) {
      console.log('já existe');
      return;
    }
    setDataItemBuy([...dataItemBuy, item]);
  };
  return (
    <CartContext.Provider
      value={{
        addItem,
        IdproductSelect,
        setIdProductSelect,
        setQtdSelected,
        qtdSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
