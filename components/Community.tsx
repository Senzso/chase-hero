import Image from "next/image"

export default function Community() {
  return (
    <section className="w-full py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-6xl md:text-7xl font-bold text-[#c41220] leading-tight mb-8">
              Join the HERO
              <br />
              Meme Community!
            </h2>
            <div className="bg-[#070735] rounded-[20px] p-8">
              <h3 className="text-[#e39e1c] text-3xl font-bold mb-4">Mission</h3>
              <p className="text-white text-2xl leading-relaxed">
                This is YOUR chance to join a community that's all about fighting for what matters. The HERO Meme
                encourages a culture of success & optimism to make the world a better place. Go HERO! 💪
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <Image
              src="/chase-3bCcpJIMcJ2wX4bVpT3P2RGg6wPqMc.png"
              alt="CHASE HERO"
              width={400}
              height={600}
              className="object-contain w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

