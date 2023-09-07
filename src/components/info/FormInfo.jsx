import { useEffect, useState, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { CartCheck } from '../Cart/CartCheck';
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';

export const FormInfo = ({ action }) => {
  const navigate = useNavigate();
  const sendToBd = () => {
    const db = getFirestore();
    const dbCollection = collection(db, 'orders');
    const order = {
      buyer: [
        {
          name: name,
          phone: telephone,
          email: email,
        },
      ],
      items: [
        {
          ...dataItemBuy,
        },
      ],
    };
    addDoc(dbCollection, order).then(({ id }) => {
      console.log(id);
      navigate('/info/order', {
        state: {
          userId: id,
        },
      });
    });
  };
  const { dataItemBuy, finalPrice } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-40 mt-5">
        <div>
          <div className="float-leftmb-30">
            <h1 className="text-3xl text-gray-900 font-bold my-4">
              Falta pouco
            </h1>
            <p className="text-gray-900 mb-50">
              Para finalizar a compra, preencha o formulário abaixo:
            </p>
          </div>

          <form className="w-full">
            <div className="flex flex-wrap mb-6 pt-30">
              <div className="w-full mt-10">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nome
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Telefone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  onChange={(e) => {
                    setTelephone(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
          <Button
            action={sendToBd}
            value={'Finalizar compra'}
          />
        </div>
        <div>
          <CartCheck />
        </div>
      </div>
    </div>
  );
};
