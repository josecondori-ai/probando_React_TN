export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mi Página</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:opacity-80 transition-opacity">Inicio</a></li>
          <li><a href="#" className="hover:opacity-80 transition-opacity">Servicios</a></li>
          <li><a href="#" className="hover:opacity-80 transition-opacity">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
