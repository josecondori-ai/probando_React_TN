
import { PostCard } from './PostCard'
const PostList = () => {
    let posts=[
        { id: 1, title: "Primera Publicación", description: "Este es un ejemplo de post." },
        { id: 2, title: "Segunda Publicación", description: "Renderizado dinámicamente con props." },
        { id: 3, title: "Tercera Publicación", description: "Usando un array en React." },
    ]
    return(
        <section className="py-16 px-6" style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)'
        }}>
      <h2 className="text-3xl font-bold text-center mb-8">Publicaciones 📝</h2>
      <div className="grid gap-6 md:grid-cols-3">
           {posts.map((post)=>(
            <PostCard title={post.title} description={post.description} key={post.id}/>
           ))}
        </div>
        </section>
        
    )
}

export { PostList }