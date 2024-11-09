import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductSection({ productCarouselRef }) {
    return (
        <section ref={productCarouselRef} className="px-8 sm:px-20 opacity-0">
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
          className="product-carousel relative min-h-[600px] sm:min-h-[600px] lg:min-h-[600px]"
        >
          <SwiperSlide>
            <Link href="/products/lettuce" className="card bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mb-4 shadow-md">
                <Image src="/farm5.jpg" alt="Lettuce" width={300} height={300} className="object-cover w-full h-full" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Lettuce</h2>
              <p className="text-gray-600 mt-2">Crisp, fresh, and nutrient-rich lettuce, perfect for salads and more.</p>
              <button className="btn btn-black mt-4 w-full">See More</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/products/microgreens" className="card bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mb-4 shadow-md">
                <Image src="/farm13.jpg" alt="Microgreens" width={300} height={300} className="object-cover w-full h-full" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Microgreens</h2>
              <p className="text-gray-600 mt-2">Tiny, flavorful, and packed with nutrients, our microgreens add zest to any dish.</p>
              <button className="btn btn-black mt-4 w-full">See More</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/products/herbs" className="card bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mb-4 shadow-md">
                <Image src="/farm8.jpeg" alt="Herbs" width={300} height={300} className="object-cover w-full h-full" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Herbs</h2>
              <p className="text-gray-600 mt-2">Fresh and aromatic herbs that bring a burst of flavor to your kitchen.</p>
              <button className="btn btn-black mt-4 w-full">See More</button>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/products/eggs" className="card bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-[300px] h-[300px] overflow-hidden rounded-lg mb-4 shadow-md">
                <Image src="/farm9.jpeg" alt="Eggs" width={300} height={300} className="object-cover w-full h-full" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Eggs</h2>
              <p className="text-gray-600 mt-2">Farm-fresh eggs from our healthy, free-range chickens.</p>
              <button className="btn btn-black mt-4 w-full">See More</button>
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    )
}