"use client";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const heroRef = useRef(null);
  const highlightsRef = useRef(null);
  const productCarouselRef = useRef(null);
  const farmersMarketRef = useRef(null);
  const contactFormRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [toastIsVisible, setToastIsVisible] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToastIsVisible(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ message: "Email sent successfully!", type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ message: "Failed to send email. Please try again later.", type: "error" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ message: "An error occurred. Please try again later.", type: "error" });
    }

    setToastIsVisible(true);
    setTimeout(() => setToastIsVisible(false), 5000);
  };


  useEffect(() => {
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.2,
    });

    if (heroRef.current) observer.observe(heroRef.current);
    if (highlightsRef.current) observer.observe(highlightsRef.current);
    if (productCarouselRef.current) observer.observe(productCarouselRef.current);
    if (farmersMarketRef.current) observer.observe(farmersMarketRef.current);
    if (contactFormRef.current) observer.observe(contactFormRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[60vh] sm:h-[70vh] bg-cover bg-center z-1 opacity-0"
      >
        {/* Replace background image with a looping video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/movie.MOV"
          loop
          autoPlay
          muted
          playsInline
        ></video>

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 animate__animated animate__fadeInLeft">
          <h1 className="text-5xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
            Freshness Takes Root Here
          </h1>
          <p className="max-w-2xl mt-4 text-lg sm:text-xl" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}>
            At Fenster Farm, we bring you the best in hydroponic farming. Dive into a world of crisp lettuce, vibrant microgreens, aromatic herbs, and farm-fresh eggs.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section ref={highlightsRef} className="py-20 px-8 sm:px-20 bg-white opacity-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          What Sets Us Apart
        </h2>
        <div className="grid gap-10 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="highlight-item text-center flex flex-col items-center animate__animated">
            <Image src="/Mainimg.jpeg" alt="Pride in Every Leaf" width={300} height={200} className="rounded-lg object-cover w-[300px] h-[300px] mb-4" />
            <h3 className="text-xl font-bold text-black">Pride in Every Leaf</h3>
            <p className="text-gray-700 mt-2">
              At Fenster Farm, we are a passionate advocate for sustainable farming, ensuring that every leaf of lettuce meets our high standards.
            </p>
          </div>
          <div className="highlight-item text-center flex flex-col items-center animate__animated">
            <Image src="/farm7.webp" alt="Fresh from the Source" width={300} height={200} className="rounded-lg mb-4 object-cover w-[300px] h-[300px]" />
            <h3 className="text-xl font-bold text-black">Fresh from the Source</h3>
            <p className="text-gray-700 mt-2">
              Experience the difference of living lettuce, freshly picked with roots intact. Our hydroponic system guarantees clean, vibrant greens.
            </p>
          </div>
          <div className="highlight-item text-center flex flex-col items-center animate__animated">
            <Image src="/farm2.jpg" alt="A Bountiful Harvest" width={300} height={200} className="rounded-lg object-cover w-[300px] h-[300px] mb-4" />
            <h3 className="text-xl font-bold text-black">A Bountiful Harvest</h3>
            <p className="text-gray-700 mt-2">
              Our state-of-the-art greenhouse is a testament to innovation and dedication, providing a consistent supply of high-quality produce.
            </p>
          </div>
        </div>
      </section>

      {/* Our Product Section Carousel */}
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

      {/* Farmers Market Section */}
      <section ref={farmersMarketRef} className="py-10 px-8 sm:px-20 bg-white opacity-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Visit Us at the Farmers Markets
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Experience the freshness firsthand! We participate in farmers markets around the area every week.
        </p>
        <div className="grid gap-8 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
            <Image src="/IMG_9713.JPG" alt="City Market" width={300} height={200} className="rounded-lg object-cover w-full h-[200px] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Midtown Farmers Market</h3>
            <p className="text-gray-600 mt-2">Downtown Main Square</p>
            <p className="text-gray-700 mt-2 font-medium">Saturdays: 9:00 AM - 2:00 PM</p>
            <Link href="#" className="text-green-600 mt-4 inline-block font-semibold">See Details</Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
            <Image src="/argicenter2.jpeg" alt="Parkside Market" width={300} height={200} className="rounded-lg object-cover w-full h-[200px] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Cordova Argicenter Farmers Market</h3>
            <p className="text-gray-600 mt-2">Green Park, West Pavilion</p>
            <p className="text-gray-700 mt-2 font-medium">Sundays: 8:00 AM - 1:00 PM</p>
            <Link href="#" className="text-green-600 mt-4 inline-block font-semibold">See Details</Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105">
            <Image src="/farm4.jpg" alt="Riverfront Market" width={300} height={200} className="rounded-lg object-cover w-full h-[200px] mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Lightfoot Farmers Market</h3>
            <p className="text-gray-600 mt-2">Riverfront Plaza</p>
            <p className="text-gray-700 mt-2 font-medium">Wednesdays: 3:00 PM - 7:00 PM</p>
            <Link href="#" className="text-green-600 mt-4 inline-block font-semibold">See Details</Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactFormRef} id="contact_form" className="py-5 sm:py-10 bg-white opacity-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Have questions? Want to learn more about our products or arrange a visit? Fill out the form below, and we’ll get in touch!
        </p>
        <div className=" max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className=" text-black input bg-gray-100"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className=" text-black input bg-gray-100"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className=" text-black input bg-gray-100"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="text-black textarea bg-gray-100"
            />
            <button className="btn" type="submit">Send Message</button>
          </form>
        </div>

        {toastIsVisible && (
          <div className={`fixed bottom-10 right-10 p-4 rounded-lg shadow-lg transition-opacity duration-300
            ${status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            <div className="flex items-center">
              {status.type === 'success' ? (
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-1.414 1.414m-12.728 0l1.414-1.414M12 3v10m4.95 4.95a7 7 0 10-9.9 0" />
                </svg>
              )}
              <p>{status.message}</p>
              <button onClick={() => setToastIsVisible(false)} className="ml-4 text-lg font-bold">×</button>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
