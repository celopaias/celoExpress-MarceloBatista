import { CartWidget } from '../cartWidget/CartWidget';
import ContainerItems from '../itemList/ContainerItems';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const { products } = useContext(CartContext);
  const categoryItems = Object.values(products).map((item) => item.categoryId);
  const newArrayCategory = Array.from(new Set(categoryItems));

  return (
    <div className="w-full bg-gray-900">
      <div className="container flex mx-auto">
        <h1 className="text-xl pr-5 py-5">Lama Express</h1>
        <ul className=" container flex mx-auto py-5 w-auto">
          <li>
            <NavLink
              to={'/'}
              className="block pl-3 pr-4 text-white hover:text-blue-200"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/'}
              className="block pl-3 pr-4 text-white hover:text-blue-200"
            >
              Sobre
            </NavLink>
          </li>
          <li className="relative dropdown inline-block">
            <NavLink
              className="block dropdown pl-3 pr-4 text-white hover:text-blue-200"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Categorias
              <svg
                className="fill-current float-right mt-1 ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
              </svg>
            </NavLink>
            <div
              className="absolute dropdown-content hidden mt-1 left-0 ml-3 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div
                className="py-1"
                role="none"
              >
                {newArrayCategory.map((category, key) => {
                  return (
                    <NavLink
                      key={key}
                      to={`category/${category}`}
                      className="text-gray-700 block px-4 py-2 text-sm capitalize"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      {category}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="block pl-3 pr-4 text-white hover:text-blue-200"
            >
              Contato
            </a>
          </li>
        </ul>

        <CartWidget />
      </div>
    </div>
  );
};

export const ItemListContainer = () => {
  return (
    <div className="pt-20">
      <h1 className="mb-4 font-bold  text-gray-900 text-center">Produtos</h1>
      <ContainerItems />
    </div>
  );
};
