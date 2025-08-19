export default function Hero() {
  return (
    <section className="text-center py-20 px-6" style={{
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-primary)'
    }}>
      <h2 className="text-4xl font-bold mb-4">Bienvenido a mi página web este 2025 🚀</h2>
      <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
        Este es un ejemplo de página con React y modo nocturno
      </p>
      <button className="px-6 py-2 rounded-lg transition" style={{
        backgroundColor: 'var(--header-bg)',
        color: 'var(--header-text)'
      }}>
        Empezar
      </button>
    </section>
  );
}
