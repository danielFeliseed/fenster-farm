import "animate.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] sm:h-[70vh] bg-cover bg-center"
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
            <Image src="/farm5.jpg" alt="Pride in Every Leaf" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-black">Pride in Every Leaf</h3>
            <p className="text-gray-700 mt-2">
              At Fenster Farm, we are a passionate advocate for sustainable farming, ensuring that every leaf of lettuce meets our high standards. From seed to harvest, we’re committed to bringing you the freshest, most nutritious produce.
            </p>
          </div>
          <div className="text-center flex flex-col items-center animate__animated animate__fadeInUp">
            <Image src="/farm5.jpg" alt="Fresh from the Source" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-black">Fresh from the Source</h3>
            <p className="text-gray-700 mt-2">
              Experience the difference of living lettuce, freshly picked with roots intact. Our hydroponic system guarantees clean, vibrant greens that stay fresher longer, delivering unmatched taste and quality directly to your kitchen.
            </p>
          </div>
          <div className="text-center flex flex-col items-center animate__animated animate__fadeInUp">
            <Image src="/farm5.jpg" alt="A Bountiful Harvest" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-black">A Bountiful Harvest</h3>
            <p className="text-gray-700 mt-2">
              Our state-of-the-art greenhouse is a testament to innovation and dedication. Here, under controlled conditions, we grow a variety of lush, green lettuces, ensuring a consistent supply of high-quality produce all year round.
            </p>
          </div>
        </div>
      </section>


      {/* Our Product Section */}
      <section className="py-20 px-8 sm:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          What We Grow
        </h2>
        <div className="grid gap-10 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-white shadow-xl animate__animated animate__fadeInUp animate__delay-2s">
            <figure>
              <Image
                src="/farm5.jpg"
                alt="Lettuce"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-black">Lettuce</h3>
              <p>Fresh, crisp, and packed with nutrients.</p>
              <Link href="/products/lettuce" className="btn btn-black mt-4">
                See More
              </Link>
            </div>
          </div>

          <div className="card bg-white shadow-xl animate__animated animate__fadeInUp animate__delay-2s">
            <figure>
              <Image
                src="/farm5.jpg"
                alt="Microgreens"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-black">Microgreens</h3>
              <p>Small greens with a big punch of flavor.</p>
              <Link href="/products/microgreens" className="btn btn-black mt-4">
                See More
              </Link>
            </div>
          </div>

          <div className="card bg-white shadow-xl animate__animated animate__fadeInUp animate__delay-2s">
            <figure>
              <Image
                src="/farm5.jpg"
                alt="Herbs"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-black">Herbs</h3>
              <p>Aromatic herbs to elevate any dish.</p>
              <Link href="/products/herbs" className="btn btn-black mt-4">
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
