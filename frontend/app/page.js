'use client'
import BookCard from './components/BookCard'
import { useFetch } from './utils/hook'

export default function Home() {
  const { data, isLoading, error } = useFetch('http://localhost:4000/api/books')
  const dataBase = data

  return (
    <section className="bg-amber-50 flex flex-col gap-12 px-4 py-12 justify-center">
      <h1 className="text-xl md:text-3xl text-center font-bold">Nos livres</h1>
      <button>Ajouter un livre</button>
      <article className="flex">
        {isLoading ? (
          <p>chargement en cours</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-12">
            {dataBase?.map((book) => (
              <BookCard
                key={book._id}
                image={book.imageUrl}
                stars={book.averageRating}
                title={book.title}
                author={book.author}
                date={book.year}
                category={book.genre}
                id={book._id}
              />
            ))}
          </div>
        )}
      </article>
    </section>
  )
}
