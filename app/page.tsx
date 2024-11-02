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

        <style jsx global>{`
          .swiper-pagination-bullets {
            bottom: -20px;
          }
          .swiper-pagination-bullet {
            background: #ccc;
            opacity: 0.7;
            width: 12px;
            height: 12px;
          }
          .swiper-pagination-bullet-active {
            background: #333;
            opacity: 1;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: #555;
            font-size: 24px;
          }
        `}</style>
      </section>
    </div>
  );
}
