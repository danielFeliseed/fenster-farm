import Image from 'next/image';

export default function HerbsPage() {
  return (
    <div className="min-h-screen bg-white font-sans py-16 px-8 sm:px-20">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Our Herbs</h1>

      <div className="grid gap-12 sm:gap-16 md:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Basil */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-basil.jpg"  // Replace with actual image URL
            alt="Basil"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Basil</h2>
          <p className="text-gray-600 mt-2">
            Sweet and aromatic, basil is a popular herb in Italian and Mediterranean cuisine.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Pasta, pizza, and pesto.
          </p>
        </div>

        {/* Mint */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-mint.jpg"  // Replace with actual image URL
            alt="Mint"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Mint</h2>
          <p className="text-gray-600 mt-2">
            Fresh and cooling, mint adds a refreshing flavor to both sweet and savory dishes.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Mojitos, salads, and desserts.
          </p>
        </div>

        {/* Rosemary */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-rosemary.jpg"  // Replace with actual image URL
            alt="Rosemary"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Rosemary</h2>
          <p className="text-gray-600 mt-2">
            Woody and fragrant, rosemary pairs well with meats and roasted vegetables.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Roasted meats, potatoes, and marinades.
          </p>
        </div>

        {/* Thyme */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-thyme.jpg"  // Replace with actual image URL
            alt="Thyme"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Thyme</h2>
          <p className="text-gray-600 mt-2">
            Earthy and slightly minty, thyme adds depth to soups, stews, and sauces.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Soups, sauces, and poultry dishes.
          </p>
        </div>

        {/* Oregano */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-oregano.jpg"  // Replace with actual image URL
            alt="Oregano"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Oregano</h2>
          <p className="text-gray-600 mt-2">
            Robust and slightly bitter, oregano is a staple in Mediterranean cooking.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Pizza, pasta sauces, and grilled vegetables.
          </p>
        </div>

        {/* Dill */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-dill.jpg"  // Replace with actual image URL
            alt="Dill"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Dill</h2>
          <p className="text-gray-600 mt-2">
            Fresh and slightly tangy, dill is often used in pickling and pairs well with fish.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Pickles, seafood, and creamy sauces.
          </p>
        </div>
      </div>
    </div>
  );
}
