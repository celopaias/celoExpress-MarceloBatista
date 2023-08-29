import { CartWidget } from '../cartWidget/CartWidget';
import ContainerItems from '../itemList/ContainerItems';

export const NavBar = ({ cartNumber }) => {
  return (
    <div className="w-full bg-gray-900">
      <div className="container flex mx-auto">
        <h1 className="text-xl pr-5 py-5">Celo Express</h1>
        <ul className=" container flex mx-auto py-5 w-auto">
          <li>
            <a
              href="#"
              className="block pl-3 pr-4 text-white hover:text-blue-200"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block pl-3 pr-4 text-white hover:text-blue-200"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block pl-3 pr-4 text-white hover:text-blue-200"
            >
              Loja
            </a>
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

        <CartWidget cartNumber={cartNumber} />
      </div>
    </div>
  );
};

export const ItemListContainer = ({ data, setCartNumber }) => {
  console.log(data);
  return (
    <div className="pt-20">
      <h1 className="mb-4 font-bold  text-gray-900 text-center">Produtos</h1>
      <ContainerItems
        data={data}
        setCartNumber={setCartNumber}
      />
    </div>
  );
};
