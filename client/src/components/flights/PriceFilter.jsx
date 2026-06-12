import { formatPrice } from "../../utils/currency";
function PriceFilter({ price, setPrice }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-xl font-bold mb-4">💰 Price Range</h3>

      <input
        type="range"
        min="0"
        max="50000"
        step="500"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full"
      />

      <div className="mt-3 text-center font-bold text-blue-600">
        {formatPrice(0)} - {formatPrice(price)}
      </div>
    </div>
  );
}

export default PriceFilter;