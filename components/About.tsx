import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-[#070735] w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              HERO:
              <br />
              THE CRYPTO
              <br />
              LEADER
            </h2>
            <div className="space-y-2">
              <p className="text-red-400 text-2xl">A Community</p>
              <p className="text-purple-400 text-2xl">Celebrating Excellence &</p>
              <p className="text-blue-400 text-2xl">Leadership</p>
            </div>
            <div className="aspect-square w-[400px] overflow-hidden">
              <Image
                src="https://www.worldlibertyfinancial.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-chase-herro.0c6fe504.jpg&w=828&q=75"
                alt="CHASE HERO"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              $HERO tokens are now freely tradeable on the blockchain.
            </h3>
            <p className="text-2xl text-gray-300 leading-relaxed">
              CHASE HERO, co-founder of World Liberty Financial - a visionary project of Donald Trump - stands as a
              beacon of leadership in the financial sector. His commitment to excellence and expertise has shaped the
              industry. With his vision for the future of finance, you can be part of this historic movement. His
              innovative approach to financial technology and dedication to empowering individuals has revolutionized
              how we think about digital assets. Through the HERO token, he's creating opportunities for everyone to
              participate in the next generation of finance.
            </p>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Join the HERO Community - we're all about promoting strong leadership and positive change in the financial
              world. Support the future of finance with $HERO tokens.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

