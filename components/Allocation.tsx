import Image from "next/image"

export default function Allocation() {
  return (
    <section id="allocation" className="w-full py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-[#8B3168] text-center mb-8">Allocation</h2>
        <p className="text-2xl text-black text-center max-w-5xl mx-auto mb-16">
          Fair launch on Pump. The initial supply includes 800 million tokens placed on the bond curve, out of a total
          supply of 1 billion tokens.
        </p>
        <div className="flex justify-center">
          <Image
            src="/Pump-Fun-Logo.png"
            alt="Pump Logo - A stylized green and white pill"
            width={1000}
            height={600}
            className="w-full max-w-3xl"
          />
        </div>
        <p className="text-sm text-gray-600 text-center mt-8 max-w-4xl mx-auto">
          Chase Hero Memes are intended to function as an expression of support for, and engagement with, the ideals and
          beliefs embodied by the symbol "$HERO" and the associated artwork, and are not intended to be, or to be the
          subject of, an investment opportunity, investment contract, or security of any type. GetChaseHeroMemes.com is
          not political and has nothing to do with any political campaign or any political office or governmental
          agency. See Terms & Conditions
          <a href="/terms" className="text-[#8B3168] hover:underline">
            {" "}
            Here
          </a>
          , See Card Allocation
          <a href="#allocation" className="text-[#8B3168] hover:underline">
            {" "}
            Here
          </a>
        </p>
      </div>
    </section>
  )
}

