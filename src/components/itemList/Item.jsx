import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import ItemDetail from './ItemDetail';
import { NavLink } from 'react-router-dom';
import { Button } from '../button/Button';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { Data, products } = useContext(CartContext);
  const categoryId = useParams();
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {Object.keys(categoryId).length === 0
          ? products.map((item) => {
              return (
                <a
                  className="group"
                  key={item.id}
                >
                  <div className="aspect-h-1 aspect-w-1 h- w-full text-center overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={item.pictureURL}
                      alt="Lorem Ipsum dolor sit amet"
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 mb-4 text-center text-sm text-gray-900">
                    {item.title}
                  </h3>
                  <div className="text-center mt-4 mb-4">
                    <span className="mt-1 text-xl text-center font-medium text-gray-900">
                      R$ {item.price}
                    </span>
                  </div>
                  <br />
                  <NavLink
                    to={`/item/${item.id}`}
                    className="group"
                    key={item.id}
                  >
                    <Button
                      disabled={false}
                      value={'Veja o produto'}
                    />
                  </NavLink>
                </a>
              );
            })
          : products
              .filter((product) => product.categoryId === categoryId.categoryId)
              .map((item) => {
                return (
                  <a
                    className="group"
                    key={item.id}
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={item.pictureURL}
                        alt="Lorem Ipsum dolor sit amet"
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 mb-4 text-center text-sm text-gray-900">
                      {item.title}
                    </h3>
                    <div className="text-center mt-4 mb-4">
                      <span className="mt-1 text-xl text-center font-medium text-gray-900">
                        R$ {item.price}
                      </span>
                    </div>
                    <br />
                    <NavLink
                      to={`/item/${item.id}`}
                      className="group"
                      key={item.id}
                    >
                      <Button
                        disabled={false}
                        value={'Veja o produto'}
                      />
                    </NavLink>
                  </a>
                );
              })}
      </div>
      <div></div>
    </div>
  );
};

export default Item;
