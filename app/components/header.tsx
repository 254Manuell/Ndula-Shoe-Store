import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Sneaker Store
        </Link>
        <Link href="/cart" className="text-gray-600 hover:text-gray-800">
          <ShoppingCartIcon className="h-6 w-6" />
        </Link>
      </nav>
    </header>
  )
}

