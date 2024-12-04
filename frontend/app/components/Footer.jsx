import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="h-16 flex items-center justify-center text-white">
      <p>
        Mon nouveau grimoire - Développé par{' '}
        <Link
          className="font-bold hover:text-orange-500"
          href="http://www.nelly-bise.fr"
          target="_blank"
        >
          Nelly Bise
        </Link>
      </p>
    </footer>
  )
}
