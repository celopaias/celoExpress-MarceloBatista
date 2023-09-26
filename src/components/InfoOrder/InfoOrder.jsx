import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const InfoOrder = () => {
  const [buyedItem, setBuyedItem] = useState();
  const [buyerPerson, setBuyerPerson] = useState();

  const location = useLocation();
  let userId = location.state.userId;

  useEffect(() => {
    console.log(buyerPerson);
  });

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, 'orders', userId);
    getDoc(product).then((result) => {
      if (result.exists()) {
        setBuyerPerson(result.data().buyer);
        setBuyedItem(Object.values(result.data().items).map((item) => item));
        console.log(result.data());
      }
    });
  }, []);

  return (
    <>
      <div className="relative container m-auto overflow-x-auto">
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
                    <td className="px-6 py-3">{item.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
