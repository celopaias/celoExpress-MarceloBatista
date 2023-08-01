export const Button = ({ value, disabled, action }) => {
  return (
    <button
      disabled={disabled}
      className="bg-gray-900 text-white font-bold py-2 px-4 border-b-4 rounded w-full btn-add-cart"
      onClick={action}
    >
      {value}
    </button>
  );
};
