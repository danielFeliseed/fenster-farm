export default function VideoLandingPageHeader({heroRef}) {
    return(
        <section
        ref={heroRef}
        className="relative w-full h-[60vh] sm:h-[70vh] bg-cover bg-center z-1 opacity-0"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/movie.MOV"
          loop
          autoPlay
          muted
          playsInline
        >
        </video>

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
    )
}