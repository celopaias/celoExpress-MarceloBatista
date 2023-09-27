import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

export const InfoOrder = () => {
  const { clearCart, qtdCart, IdproductSelect } = useContext(CartContext);
  const [buyedItem, setBuyedItem] = useState();
  const [buyerPerson, setBuyerPerson] = useState();
  const [idProducts, setIdProducts] = useState([]);

  const location = useLocation();
  let userId = location.state.userId;

  useEffect(() => {
    if (qtdCart > 0) {
      clearCart();
    }
    const db = getFirestore();
    const product = doc(db, 'orders', userId);
    getDoc(product).then((result) => {
      if (result.exists()) {
        setBuyerPerson(result.data().buyer);
        setBuyedItem(Object.values(result.data().items).map((item) => item));
        setIdProducts([
          Object.values(result.data().items).map((item) => item.id),
        ]);
      }
    });
  }, []);

  useEffect(() => {
    const db = getFirestore();
    buyedItem &&
      buyedItem.length > 0 &&
      buyedItem.map((item) => {
        const orderDoc = doc(db, 'products', item.id);
        if (typeof item.stock === 'number')
          updateDoc(orderDoc, { qtd: item.stock });
        console.log('Alterou ');
      });
  });

  return (
    <>
      <div className="relative container m-auto overflow-x-auto content-main">
        <h1 className="text-3xl text-gray-900 font-bold my-4">
          Parabéns, agora é só esperar pela sua compra!
        </h1>
        <p className="text-gray-700">
          Sua ordem de pedido é: <strong>{userId}</strong>
        </p>
        <table className="w-full text-sm text-left mt-5 text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Nome do Comprador
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                E-mail do comprador
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Celular
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-900">
              {buyerPerson && (
                <>
                  <td className="px-6 py-3">{buyerPerson.name}</td>
                  <td className="px-6 py-3">{buyerPerson.email}</td>
                  <td className="px-6 py-3">{buyerPerson.phone}</td>
                </>
              )}
            </tr>
          </tbody>
        </table>
        <table className="w-full text-sm text-left mt-5 text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Produtos comprados
              </th>
              <th
                scope="col"
                className="px-6 py-3"
                width="50%"
              >
                Descrição
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Quantidade
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Preço
              </th>
            </tr>
          </thead>
          <tbody>
            {buyedItem &&
              buyedItem.length > 0 &&
              buyedItem.map((item, key) => {
                return (
                  <tr
                    className=" text-gray-900"
                    key={key}
                  >
                    <td className="px-6 py-3">{item.title}</td>
                    <td className="px-6 py-3">{item.description}</td>
                    <td className="px-6 py-3 text-center">{item.qtd}</td>
                    <td className="px-6 py-3">R$ {item.price},00</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
