import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const produtos = [
    { name: 'Camisa Estilosa', price: '79,90', image: '/camisa.jpg' },
    { name: 'Calça Jeans', price: '129,90', image: '/calca.jpg' },
    { name: 'Jaqueta Moderna', price: '199,90', image: '/jaqueta.jpg' },
  ]

  return (
    <div>
      <Navbar />
      <section className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Produtos em Destaque</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {produtos.map((prod, idx) => (
            <ProductCard key={idx} {...prod} />
          ))}
        </div>
      </section>
    </div>
  )
}