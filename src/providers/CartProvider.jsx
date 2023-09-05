import { useState, useEffect } from 'react';
import CartContext from '../contexts/CartContext';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Data } from '../data/Data';
export default function CartProvider({ children }) {
  const [qtdSelected, setQtdSelected] = useState();
  const [products, setProducts] = useState([]);
  const [qtdStock, setQtdStock] = useState();
  const [dataItemBuy, setDataItemBuy] = useState(
    JSON.parse(localStorage.getItem('cart') || '[]')
  );
  const [IdproductSelect, setIdProductSelect] = useState();
  const [finalPrice, setFinalPrice] = useState();
  const [controler, setControler] = useState();
  const [qtdCart, setQtdCart] = useState();

  useEffect(() => {
    const db = getFirestore();
    const productss = collection(db, 'products');
    getDocs(productss).then((result) =>
      setProducts(
        result.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    );
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(dataItemBuy));
  }, [dataItemBuy]);

  useEffect(() => {
    setQtdCart(dataItemBuy.length);
    console.log(qtdCart);
  });
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('cart') || '[]').reduce(
      (total, currentValue) => (total = total + currentValue.price),
      0
    );
    setFinalPrice(result);
  }, [dataItemBuy]);
  const clearCart = () => {
    localStorage.removeItem('cart');
    window.location.reload(false);
  };

  const removeSelectedCart = (id) => {
    const elements = JSON.parse(localStorage.getItem('cart'));
    const newElement = elements.filter((element) => element.id !== id);
    localStorage.setItem('cart', JSON.stringify(newElement));
    window.location.reload(false);
  };
  const endingCart = () => {
    alert('Em breve');
  };

  const addItem = (item, qtd) => {
    const selectedItem = {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price * qtd,
      url: item.pictureURL,
      qtd: qtd,
      stock: item.stock - qtd,
    };

    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', []);
    }

    const old_data = JSON.parse(localStorage.getItem('cart') || '[]');

    setControler(true);

    const alreadyExist =
      old_data.filter((listItem) => listItem.id === item.id).length > 0;

    if (alreadyExist) {
      console.log('já existe');
      return;
    } else {
      setDataItemBuy([...dataItemBuy, selectedItem]);
    }
  };
  return (
    <CartContext.Provider
      value={{
        addItem,
        IdproductSelect,
        setIdProductSelect,
        setQtdSelected,
        qtdSelected,
        dataItemBuy,
        finalPrice,
        clearCart,
        qtdCart,
        products,
        Data,
        removeSelectedCart,
        endingCart,
        qtdStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
