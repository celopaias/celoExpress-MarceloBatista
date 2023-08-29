import Item from './Item';

const ContainerItems = ({ data, setCartNumber }) => {
  return (
    <Item
      data={data}
      setCartNumber={setCartNumber}
    />
  );
};

export default ContainerItems;
