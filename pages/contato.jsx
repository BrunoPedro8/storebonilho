import Navbar from '../components/Navbar'

export default function Contato() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Entre em Contato</h1>
        <form className="flex flex-col space-y-4 max-w-md">
          <input type="text" placeholder="Nome" className="border p-2 rounded"/>
          <input type="email" placeholder="Email" className="border p-2 rounded"/>
          <textarea placeholder="Sua mensagem" className="border p-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Enviar
          </button>
        </form>
      </section>
    </div>
  )
}