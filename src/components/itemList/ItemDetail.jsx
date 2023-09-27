import { useContext, useEffect } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link, useParams } from 'react-router-dom';
import { Data } from '../../data/Data';
import { Button } from '../button/Button';
import CartContext from '../../contexts/CartContext';
const ItemDetail = ({ data }) => {
  const id = useParams();

  const {
    addItem,
    IdproductSelect,
    setIdProductSelect,
    setQtdSelected,
    qtdSelected,
    Data,
    products,
  } = useContext(CartContext);

  useEffect(() => {
    setIdProductSelect(id.id);
    console.log(IdproductSelect);
  }, [id]);
  return (
    <>
      {products
        .filter((product) => product.id === IdproductSelect)
        .map((item) => (
          <>
            <div
              key={item.id}
              className="container mx-auto content-main"
            >
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex items-center flex-wrap justify-center">
                  <img
                    alt="ecommerce"
                    style={{ width: '280px', height: '280px' }}
                    src={item.pictureURL}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed text-gray-900 py-5">
                      {item.description}
                    </p>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        R$ {item.price}
                      </span>
                    </div>
                    <div className="my-4">
                      <ItemCount
                        stock={item.qtd}
                        id={item.id}
                        qtdSelected={setQtdSelected}
                      />
                    </div>
                    <div>
                      <Link to="/cart">
                        <Button
                          disabled={item.qtd === 0 && true}
                          value="Comprar"
                          action={() => {
                            addItem(item, qtdSelected, IdproductSelect);
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default ItemDetail;
