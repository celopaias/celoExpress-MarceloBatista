import { useState, useEffect } from 'react';
const ItemList = ({ item, id }) => {
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
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
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
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <img src={showDetails === true && item.pictureURL} />
                  <p className="pt-5">
                    {showDetails === true && item.description}
                  </p>
                  <p className="text-4xl pt-5">
                    {showDetails === true && 'R$' + item.price}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => closeModal()}
                  >
                    Fechar
                  </button>
                </div>
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

export default ItemList;
