import { useState, useEffect } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import loading from './../../assets/loading.gif';
const ItemDetail = ({ item, id, stock }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenInfo = () => {
    setShowDetails(false);
    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 2000);
    return () => clearInterval(timer);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    handleOpenInfo();
  }, [openModal]);
  return (
    <>
      <button
        className="bg-gray-900 text-white font-bold py-2 px-4 border-b-4 rounded w-full btn-add-cart"
        onClick={() => setOpenModal(true)}
        id={'show' + item.id}
      >
        Mais informações
      </button>{' '}
      {openModal === true ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-gray-900">
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
              {/*content*/}

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {showDetails === true ? (
                  <>
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        {showDetails === true && item.title}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowDetails(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <img src={showDetails === true && item.pictureURL} />
                      <p className="pt-5">
                        {showDetails === true && item.description}
                      </p>
                      <p className="text-4xl pt-5">
                        {showDetails === true && 'R$' + item.price}
                      </p>
                    </div>
                    <div className="p-4">
                      {' '}
                      <ItemCount stock={stock} />
                    </div>
                    <div className="flex items-center justify-start first-letter:border-t border-solid p-4 pt-0 rounded-b">
                      <button
                        className="bg-red-900 text-white font-bold py-2 px-4 border-b-4 rounded w-full btn-add-cart"
                        type="button"
                        onClick={() => closeModal()}
                      >
                        Fechar
                      </button>
                    </div>{' '}
                  </>
                ) : (
                  <div className="loading flex justify-center text-center p-40">
                    <img
                      src={loading}
                      alt=""
                      cla
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default ItemDetail;
