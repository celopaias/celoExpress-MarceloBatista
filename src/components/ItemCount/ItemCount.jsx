import { useState } from 'react';
import { Button } from '../button/Button';
export const ItemCount = ({ stock, id }) => {
  const [addItem, setAddItem] = useState(1);

  const OnAdd = () => {
    alert(
      addItem === 1
        ? 'Foi adicionado ' + addItem + ' item em seu carrinho'
        : 'Foram adicionados ' + addItem + ' itens em seu carrinho'
    );
  };
  return (
    <>
      <div className="flex justify-between px-3">
        <div className={stock === 0 ? 'disabled-onadd' : 'onadd'}>
          {' '}
          <input
            className="bg-gray-900 w-5 rounded-sm text-center text-white action-cart"
            onClick={() => setAddItem(addItem - 1)}
            defaultValue={'-'}
            disabled={addItem === 1 ? true : false}
          />
          <input
            id={'subtractitem' + id}
            className="mx-2 border text-center w-8 bg-white text-gray-900"
            type="text"
            value={stock === 0 ? '' : addItem}
          />
          <input
            id={'additem_' + id}
            className="bg-gray-900 w-5 rounded-sm text-center text-white action-cart"
            onClick={() => setAddItem(addItem + 1)}
            defaultValue={'+'}
            disabled={addItem === stock ? true : false}
          />
        </div>

        <div>
          <span className="flex text-gray-900">Qtd: {stock}</span>
        </div>
      </div>
      <div className="flex justify-center align-middle mt-7">
        <Button
          disabled={stock === 0 ? true : false}
          value={stock === 0 ? 'Não possui estoque' : 'Adicionar ao Carrinho'}
          action={OnAdd}
        />
      </div>
    </>
  );
};
