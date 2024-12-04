'use client'
import { useParams } from 'next/navigation'
import { useFetch } from '@/app/utils/hook'
import Image from 'next/image'
import Notation from '@/app/components/Notation'
import Stars from '@/app/components/ui/Stars'

export default function Book() {
  const identifiant = useParams()
  const url = `http://localhost:4000/api/books/${identifiant.id}`
  const { data, isLoading, error } = useFetch(url)
  const dataBook = data
  console.log(dataBook)

  return (
    <>
      <section className="bg-amber-50 px-4 flex gap-12 py-12">
        {isLoading ? (
          <p>chargement en cours</p>
        ) : (
          <div className="flex flex-col md:flex-row w-full md:w-4/6 items-center mx-auto gap-2 md:gap-8">
            <Image
              src={dataBook.imageUrl}
              alt="couverture du livre"
              width={1000}
              height={2000}
              className="w-full md:w-1/2 rounded"
            />
            <div className="w-full h-full md:w-1/2 flex flex-col gap-8">
              <div className="w-full grid grid-cols-3 grid-rows-[1.5fr,_1fr,_1fr] h-1/2 border-[1px] border-orange-950">
                <div className="col-span-3 font-bold text-2xl border-[1px] border-orange-950 flex items-center px-2">
                  {dataBook.title}
                </div>
                <div className="col-span-2 row-start-2 border-[1px] border-orange-950 flex items-center px-2">
                  par {dataBook.author}
                </div>
                <div className="col-start-3 row-start-2 border-[1px] border-orange-950 flex items-center justify-center">
                  {dataBook.year}
                </div>
                <div className="row-start-3 border-[1px] border-orange-950 flex items-center px-2">
                  {dataBook.genre}
                </div>
                <div className="col-span-2 row-start-3 border-[1px] border-orange-950 flex items-center justify-center gap-2">
                  <Stars
                    className="border-[1px] border-orange-950"
                    number={dataBook.averageRating}
                  />{' '}
                  {dataBook.averageRating} / 5
                </div>
              </div>
              <div className="h-1/2 bg-amber-100 flex items-center justify-center">
                <Notation />
              </div>
            </div>
          </div>
        )}
      </section>
      <section>
        <h2>Les mieux notés</h2>
      </section>
    </>
  )
}
