"use client";
import "animate.css";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import VideoLandingPageHeader from "../components/VideoLandingPageHeader";
import HighlightSection from "../components/HighlightSection";
import ProductSection from "../components/ProductSection";
import MarketInfo from "../components/MarketInfo";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const heroRef = useRef(null);
  const highlightsRef = useRef(null);
  const productCarouselRef = useRef(null);
  const farmersMarketRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

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

      <VideoLandingPageHeader heroRef={heroRef} />

      <HighlightSection highlightsRef={highlightsRef} />

      <ProductSection productCarouselRef={productCarouselRef} />

      <MarketInfo farmersMarketRef={farmersMarketRef} />

      <ContactForm contactFormRef={contactFormRef} />
      
    </div>
  );
}
