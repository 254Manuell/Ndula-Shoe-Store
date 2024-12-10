import { products } from '@/lib/products'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image src={product.image} alt={product.name} width={600} height={600} className="w-full rounded-lg" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

