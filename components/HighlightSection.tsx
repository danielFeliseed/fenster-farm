import Image from 'next/image';

export default function HighlightSection({ highlightsRef }) {
    return (
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
    )
}