import Link from 'next/link';
import Image from 'next/image';

export default function Products() {
    return (
        <div className="min-h-screen bg-white font-sans py-16 px-8 sm:px-20">
            <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Our Products</h1>

            <div className="grid gap-12 sm:gap-16 md:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Lettuce Card */}
                <Link href="/products/lettuce" className="card bg-white shadow-xl p-6 rounded-lg text-center">
                    <Image
                        src="/farm6.jpg"  // Replace with actual image URL
                        alt="Lettuce"
                        width={300}
                        height={200}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Lettuce</h2>
                    <p className="text-gray-600 mt-2">
                        Crisp, fresh, and nutrient-rich lettuce, perfect for salads and more.
                    </p>
                    <button className="btn btn-black mt-4">
                        See More
                    </button>
                </Link>

                {/* Microgreens Card */}
                <Link href="/products/microgreens" className="card bg-white shadow-xl p-6 rounded-lg text-center">
                    <Image
                        src="/farm6.jpg"  // Replace with actual image URL
                        alt="Microgreens"
                        width={300}
                        height={200}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Microgreens</h2>
                    <p className="text-gray-600 mt-2">
                        Tiny, flavorful, and packed with nutrients, our microgreens add zest to any dish.
                    </p>
                    <button className="btn btn-black mt-4">
                        See More
                    </button>
                </Link>

                {/* Herbs Card */}
                <Link href="/products/herbs" className="card bg-white shadow-xl p-6 rounded-lg text-center">
                    <Image
                        src="/farm6.jpg"  // Replace with actual image URL
                        alt="Herbs"
                        width={300}
                        height={200}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Herbs</h2>
                    <p className="text-gray-600 mt-2">
                        Fresh and aromatic herbs that bring a burst of flavor to your kitchen.
                    </p>
                    <button className="btn btn-black mt-4">
                        See More
                    </button>
                </Link>

                {/* Eggs Card */}
                <Link href="/products/eggs" className="card bg-white shadow-xl p-6 rounded-lg text-center">
                    <Image
                        src="/farm6.jpg"  // Replace with actual image URL
                        alt="Eggs"
                        width={300}
                        height={200}
                        className="rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Eggs</h2>
                    <p className="text-gray-600 mt-2">
                        Farm-fresh eggs from our healthy, free-range chickens.
                    </p>
                    <button className="btn btn-black mt-4">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    );
}