import Image from 'next/image'
import Link from 'next/link'
import Stars from './ui/Stars'

export default function BookCard({
  image,
  stars,
  title,
  author,
  date,
  category,
  id,
}) {
  return (
    <Link href={`/livre/${id}`}>
      <div className="flex max-w-96 gap-4">
        <Image
          src={image}
          alt=""
          width={1000}
          height={2000}
          className="w-1/2 rounded"
        />
        <div className="w-1/2 flex flex-col justify-center gap-2">
          <Stars number={stars} />
          <p className="font-bold text-lg">{title}</p>
          <p>{author}</p>
          <p>{date}</p>
          <p>{category}</p>
        </div>
      </div>
    </Link>
  )
}
