import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Button from './ui/Button'

export default function Notation() {
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
    console.log(rating)
  }
  return (
    <article className="flex flex-col items-center gap-4">
      <p className="text-xl font-bold">Notez cet ouvrage</p>
      <Rating
        SVGclassName={'inline-block'}
        onClick={handleRating}
        ratingValue={rating}
        className="mb-8"
      />
      <Button title="Valider" />
    </article>
  )
}
