export default function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md"/>
      <h2 className="mt-2 font-semibold">{name}</h2>
      <p className="text-gray-600">R$ {price}</p>
      <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Comprar
      </button>
    </div>
  )
}