import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={product.image} alt={product.name} width={300} height={300} className="w-full" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <Link href={`/products/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Details
        </Link>
      </div>
    </div>
  )
}

