import {
  collection,
  getFirestore,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const InfoOrder = () => {
  const [buyedItem, setBuyedItem] = useState();

  const location = useLocation();
  let userId = location.state.userId;

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, 'orders', userId);
    getDoc(product).then((result) => {
      if (result.exists()) {
        setBuyedItem({ id: result.id, ...result.data() });
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
        {/* <table className="w-full text-sm text-left mt-5 text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Nome
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              ></th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Número de pedido
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Preço
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table> */}
      </div>
    </>
  );
};
