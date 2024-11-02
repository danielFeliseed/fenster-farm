import Image from 'next/image';

export default function EggsPage() {
  return (
    <div className="min-h-screen bg-white font-sans py-16 px-8 sm:px-20">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Our Farm Fresh Eggs</h1>

      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8">
        {/* Main Image */}
        <Image
          src="/placeholder-eggs.jpg"  // Replace with actual image URL
          alt="Farm Fresh Eggs"
          width={500}
          height={400}
          className="rounded-lg shadow-lg mb-8 sm:mb-0"
        />

        {/* Description Section */}
        <div className="text-center sm:text-left max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800">Why Our Eggs Stand Out</h2>
          <p className="text-gray-700 mt-4">
            Our eggs come from cage-free hens that roam freely, allowing them to live in a more natural environment. Fed with a specially formulated, soy-free diet, our chickens produce eggs that are both nutritious and delicious. The soy-free feed not only benefits the health of the chickens but also creates a more wholesome egg for you and your family.
          </p>
          <p className="text-gray-700 mt-4 italic">
            Best for: Breakfast dishes, baking, and wholesome meals.
          </p>
        </div>
      </div>

      {/* Additional Information Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">What Makes Our Eggs Special</h2>

        <div className="grid gap-12 sm:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {/* Nutritional Benefits */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">Nutrient-Rich</h3>
            <p className="text-gray-600 mt-2">
              Our eggs are packed with high-quality protein, healthy fats, and essential vitamins, making them a great addition to a balanced diet.
            </p>
          </div>

          {/* Ethically Raised */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">Ethically Raised</h3>
            <p className="text-gray-600 mt-2">
              Cage-free and humanely raised, our hens live happier and healthier lives, which leads to better quality eggs.
            </p>
          </div>

          {/* Soy-Free Feed */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">Soy-Free Feed</h3>
            <p className="text-gray-600 mt-2">
              Our soy-free feed ensures our eggs are produced naturally, without the allergens and potential additives found in soy.
            </p>
          </div>
        </div>
      </section>

      {/* Cooking Ideas Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Ideas for Enjoying Our Eggs</h2>
        <div className="grid gap-12 sm:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {/* Breakfast Dishes */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <Image
              src="/placeholder-breakfast.jpg"  // Replace with actual image URL
              alt="Breakfast Dishes"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Perfect for Breakfast</h3>
            <p className="text-gray-600 mt-2">
              Our eggs are ideal for scrambled eggs, omelets, and sunny-side-up dishes. Start your day with a nutritious meal.
            </p>
          </div>

          {/* Baking */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <Image
              src="/placeholder-baking.jpg"  // Replace with actual image URL
              alt="Baking"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Great for Baking</h3>
            <p className="text-gray-600 mt-2">
              Whether you’re baking cakes, cookies, or bread, our eggs add richness and structure to all your baked goods.
            </p>
          </div>

          {/* Wholesome Meals */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <Image
              src="/placeholder-wholesome.jpg"  // Replace with actual image URL
              alt="Wholesome Meals"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Wholesome Meals</h3>
            <p className="text-gray-600 mt-2">
              Use our eggs in quiches, frittatas, or salads to create delicious and protein-rich meals for any time of the day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}