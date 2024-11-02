"use client";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] sm:h-[70vh] bg-cover bg-center z-1"
        style={{ backgroundImage: "url('/farm5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 animate__animated animate__fadeInLeft">
          <h1
            className="text-5xl font-bold"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            Freshness Takes Root Here
          </h1>
          <p
            className="max-w-2xl mt-4 text-lg sm:text-xl"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}
          >
            At Fenster Farm, we bring you the best in hydroponic farming. Dive
            into a world of crisp lettuce, vibrant microgreens, aromatic herbs,
            and farm-fresh eggs. Our innovative techniques ensure that you enjoy
            the freshest and healthiest produce, straight from our farm to your
            table.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-8 sm:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          What Sets Us Apart
        </h2>
        <div className="grid gap-10 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center flex flex-col items-center animate__animated animate__fadeInUp">
            <Image src="/Mainimg.jpeg" alt="Pride in Every Leaf" width={300} height={200} className="rounded-lg object-cover w-[300px] h-[300px] mb-4" />
            <h3 className="text-xl font-bold text-black">Pride in Every Leaf</h3>
            <p className="text-gray-700 mt-2">
              At Fenster Farm, we are a passionate advocate for sustainable farming, ensuring that every leaf of lettuce meets our high standards. From seed to harvest, we’re committed to bringing you the freshest, most nutritious produce.
            </p>
          </div>
          <div className="text-center flex flex-col items-center animate__animated animate__fadeInUp">
            <Image src="/farm7.webp" alt="Fresh from the Source" width={300} height={200} className="rounded-lg mb-4 object-cover w-[300px] h-[300px]" />
            <h3 className="text-xl font-bold text-black">Fresh from the Source</h3>
            <p className="text-gray-700 mt-2">
              Experience the difference of living lettuce, freshly picked with roots intact. Our hydroponic system guarantees clean, vibrant greens that stay fresher longer, delivering unmatched taste and quality directly to your kitchen.
            </p>
          </div>
          <div className="text-center flex flex-col items-center animate__animated animate__fadeInUp">
            <Image src="/farm2.jpg" alt="A Bountiful Harvest" width={300} height={200} className="rounded-lg object-cover w-[300px] h-[300px] mb-4" />
            <h3 className="text-xl font-bold text-black">A Bountiful Harvest</h3>
            <p className="text-gray-700 mt-2">
              Our state-of-the-art greenhouse is a testament to innovation and dedication. Here, under controlled conditions, we grow a variety of lush, green lettuces, ensuring a consistent supply of high-quality produce all year round.
            </p>
          </div>
        </div>
      </section>

      {/* Our Product Section Carousel */}
      <section className="py-20 px-8 sm:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          What We Grow
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          className="product-carousel relative  min-h-[600px] sm:min-h-[600px] lg:min-h-[600px]"
        >
          <SwiperSlide>
            <Link href="/products/lettuce" className="card bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mb-4 shadow-md">
                <Image
                  src="/farm5.jpg"
                  alt="Lettuce"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Lettuce</h2>
              <p className="text-gray-600 mt-2">
                Crisp, fresh, and nutrient-rich lettuce, perfect for salads and more.
              </p>
              <button className="btn btn-black mt-4 w-full">
                See More
              </button>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/products/microgreens" className="card bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mb-4 shadow-md">
                <Image
                  src="/farm13.jpg"
                  alt="Microgreens"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Microgreens</h2>
              <p className="text-gray-600 mt-2">
                Tiny, flavorful, and packed with nutrients, our microgreens add zest to any dish.
              </p>
              <button className="btn btn-black mt-4 w-full">
                See More
              </button>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/products/herbs" className="card bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mb-4 shadow-md">
                <Image
                  src="/farm8.jpeg"
                  alt="Herbs"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Herbs</h2>
              <p className="text-gray-600 mt-2">
                Fresh and aromatic herbs that bring a burst of flavor to your kitchen.
              </p>
              <button className="btn btn-black mt-4 w-full">
                See More
              </button>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/products/eggs" className="card bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mb-4 shadow-md">
                <Image
                  src="/farm9.jpeg"
                  alt="Eggs"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Eggs</h2>
              <p className="text-gray-600 mt-2">
                Farm-fresh eggs from our healthy, free-range chickens.
              </p>
              <button className="btn btn-black mt-4 w-full">
                See More
              </button>
            </Link>
          </SwiperSlide>
        </Swiper>

        {/* Farmers Market Section */}
        <section className="py-20 px-8 sm:px-20 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Visit Us at the Farmers Markets
          </h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Experience the freshness firsthand! We participate in farmers markets around the area every week. Stop by to pick up the freshest produce and chat with us about our farming practices.
          </p>
          <div className="grid gap-8 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Market Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
              <Image
                src="/IMG_9713.JPG"  // Replace with actual image URL
                alt="City Market"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-[200px] mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">Midtown Farmers Market</h3>
              <p className="text-gray-600 mt-2">Downtown Main Square</p>
              <p className="text-gray-700 mt-2 font-medium">
                Saturdays: 9:00 AM - 2:00 PM
              </p>
              <Link href="#" className="text-green-600 mt-4 inline-block font-semibold">
                See Details
              </Link>
            </div>

            {/* Market Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
              <Image
                src="/IMG_9713.JPG"  // Replace with actual image URL
                alt="Parkside Market"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-[200px] mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">Cordova Argicenter Farmers Market</h3>
              <p className="text-gray-600 mt-2">Green Park, West Pavilion</p>
              <p className="text-gray-700 mt-2 font-medium">
                Sundays: 8:00 AM - 1:00 PM
              </p>
              <Link href="#" className="text-green-600 mt-4 inline-block font-semibold">
                See Details
              </Link>
            </div>

            {/* Market Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
              <Image
                src="/farm4.jpg"  // Replace with actual image URL
                alt="Riverfront Market"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-[200px] mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">Lightfoot Farmers Market</h3>
              <p className="text-gray-600 mt-2">Riverfront Plaza</p>
              <p className="text-gray-700 mt-2 font-medium">
                Wednesdays: 3:00 PM - 7:00 PM
              </p>
              <Link href="#" className="text-green-600 mt-4 inline-block font-semibold">
                See Details
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-8 sm:px-20 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Have questions? Want to learn more about our products or arrange a visit? Fill out the form below, and we’ll get in touch!
          </p>

          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="form-control space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered bg-white w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Email</span>
                </label>
                <input type="email" placeholder="Your Email" className="input input-bordered bg-white w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Subject</span>
                </label>
                <input type="text" placeholder="Subject" className="input input-bordered bg-white w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold">Message</span>
                </label>
                <textarea className="textarea textarea-bordered bg-white w-full h-24" placeholder="Your Message"></textarea>
              </div>

              <div>
                <button type="submit" className="btn btn-black w-full mt-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
