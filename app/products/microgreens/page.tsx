import Image from 'next/image';

export default function MicrogreensPage() {
  return (
    <div className="min-h-screen bg-white font-sans py-16 px-8 sm:px-20">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Our Microgreens</h1>

      <div className="grid gap-12 sm:gap-16 md:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Sunflower Microgreens */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-sunflower.jpg"  // Replace with actual image URL
            alt="Sunflower Microgreens"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Sunflower Microgreens</h2>
          <p className="text-gray-600 mt-2">
            Nutty and crunchy, sunflower microgreens are a perfect addition to salads and sandwiches.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Salads, sandwiches, and as a snack.
          </p>
        </div>

        {/* Radish Microgreens */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-radish.jpg"  // Replace with actual image URL
            alt="Radish Microgreens"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Radish Microgreens</h2>
          <p className="text-gray-600 mt-2">
            Spicy and vibrant, radish microgreens bring a zing to any dish.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Tacos, salads, and as a garnish.
          </p>
        </div>

        {/* Pea Shoots */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-peashoots.jpg"  // Replace with actual image URL
            alt="Pea Shoots"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Pea Shoots</h2>
          <p className="text-gray-600 mt-2">
            Sweet and tender, pea shoots are great in stir-fries and as a fresh snack.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Stir-fries, salads, and sandwiches.
          </p>
        </div>

        {/* Broccoli Microgreens */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-broccoli.jpg"  // Replace with actual image URL
            alt="Broccoli Microgreens"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Broccoli Microgreens</h2>
          <p className="text-gray-600 mt-2">
            Mild and packed with nutrients, broccoli microgreens are versatile and health-boosting.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Smoothies, salads, and wraps.
          </p>
        </div>

        {/* Arugula Microgreens */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-arugula.jpg"  // Replace with actual image URL
            alt="Arugula Microgreens"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Arugula Microgreens</h2>
          <p className="text-gray-600 mt-2">
            Peppery and aromatic, arugula microgreens add a kick to your favorite dishes.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Pizza, salads, and sandwiches.
          </p>
        </div>

        {/* Basil Microgreens */}
        <div className="card bg-white shadow-xl p-6 rounded-lg text-center">
          <Image
            src="/placeholder-basil.jpg"  // Replace with actual image URL
            alt="Basil Microgreens"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Basil Microgreens</h2>
          <p className="text-gray-600 mt-2">
            Fresh and aromatic, basil microgreens are perfect for adding an herbaceous touch to your dishes.
          </p>
          <p className="text-gray-600 mt-2 italic">
            Best for: Pasta, pizza, and Italian dishes.
          </p>
        </div>
      </div>
    </div>
  );
}