import Image from 'next/image';

export default function LettucePage() {
  return (
    <div className="min-h-screen bg-white font-sans py-16 px-8 sm:px-20">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Our Lettuce Varieties</h1>

      <div className="grid gap-12 sm:gap-16 md:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Butterhead Lettuce */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-butterhead.jpg"  // Replace with actual image URL
            alt="Butterhead Lettuce"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Butterhead Lettuce</h2>
          <p className="text-gray-600 mt-2">
            Known for its soft, tender leaves and mild flavor, butterhead lettuce is perfect for wraps and salads.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Sandwiches, wraps, and light salads.
          </p>
        </div>

        {/* Romaine Lettuce */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-romaine.jpg"  // Replace with actual image URL
            alt="Romaine Lettuce"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Romaine Lettuce</h2>
          <p className="text-gray-600 mt-2">
            Crisp and slightly bitter, romaine lettuce holds up well to rich dressings and bold flavors.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Caesar salads, grilling, and hearty salads.
          </p>
        </div>

        {/* Oak Leaf Lettuce */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-oakleaf.jpg"  // Replace with actual image URL
            alt="Oak Leaf Lettuce"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Oak Leaf Lettuce</h2>
          <p className="text-gray-600 mt-2">
            With its unique leaf shape and mild flavor, oak leaf lettuce adds a visual appeal to any salad.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Mixed salads and as a garnish.
          </p>
        </div>

        {/* Little Gem Lettuce */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-littlegem.jpg"  // Replace with actual image URL
            alt="Little Gem Lettuce"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Little Gem Lettuce</h2>
          <p className="text-gray-600 mt-2">
            Small and crunchy, Little Gem lettuce is perfect for single-serving salads and can be used as lettuce cups.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Lettuce cups, individual salads, and appetizer plates.
          </p>
        </div>

        {/* Green Leaf Lettuce */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-greenleaf.jpg"  // Replace with actual image URL
            alt="Green Leaf Lettuce"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Green Leaf Lettuce</h2>
          <p className="text-gray-600 mt-2">
            With its mild taste and large, soft leaves, green leaf lettuce is versatile and great for layering in sandwiches.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Sandwiches, burgers, and light salads.
          </p>
        </div>

        {/* Red Leaf Lettuce */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-redleaf.jpg"  // Replace with actual image URL
            alt="Red Leaf Lettuce"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Red Leaf Lettuce</h2>
          <p className="text-gray-600 mt-2">
            A visually striking lettuce with a slightly nutty flavor, red leaf lettuce is perfect for adding color to dishes.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Mixed salads and as a colorful garnish.
          </p>
        </div>
      </div>
    </div>
  );
}
