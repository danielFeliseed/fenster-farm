import Image from 'next/image';

export default function MarketInfo({ farmersMarketRef }) {
    return (
        <section ref={farmersMarketRef} className="py-10 px-8 sm:px-20 bg-white opacity-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Visit Us at the Farmers Markets
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Experience the freshness firsthand! We participate in farmers markets around the area every week.
        </p>
        <div className="grid gap-8 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
            <Image src="/IMG_9713.JPG" alt="City Market" width={300} height={200} className="rounded-lg object-cover w-full h-[200px] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Midtown Farmers Market</h3>
            <p className="text-gray-600 mt-2">Downtown Main Square</p>
            <p className="text-gray-700 mt-2 font-medium flex-grow">Saturdays: 9:00 AM - 2:00 PM</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Downtown+Main+Square"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 mt-4 inline-block font-semibold"
            >
              Get Directions
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
            <Image src="/argicenter2.jpeg" alt="Parkside Market" width={300} height={200} className="rounded-lg object-cover w-full h-[200px] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Cordova Argicenter Farmers Market</h3>
            <p className="text-gray-600 mt-2">Green Park, West Pavilion</p>
            <p className="text-gray-700 mt-2 font-medium">Sundays: 8:00 AM - 1:00 PM</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Green+Park,+West+Pavilion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 mt-4 inline-block font-semibold"
            >
              Get Directions
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
            <Image src="/farm4.jpg" alt="Riverfront Market" width={300} height={200} className="rounded-lg object-cover w-full h-[200px] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Lightfoot Farmers Market</h3>
            <p className="text-gray-600 mt-2">Riverfront Plaza</p>
            <p className="text-gray-700 mt-2 font-medium">Wednesdays: 3:00 PM - 7:00 PM</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Riverfront+Plaza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 mt-4 inline-block font-semibold"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    )
}