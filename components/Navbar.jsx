export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between">
        <h1 className="text-xl font-bold">Loja de Roupas</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="/produtos" className="hover:text-blue-500">Produtos</a></li>
          <li><a href="/contato" className="hover:text-blue-500">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}