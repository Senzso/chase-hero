import { CopyIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowToBuy() {
  const contractAddress = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN"

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <section id="how-to-buy" className="w-full bg-[#070735] py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl md:text-7xl font-bold text-white text-center mb-16">
          <span className="text-[#c41220]">Buy Now</span> on <br />
          Solana!
        </h2>
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-white text-center mb-4">Solana Contract Address</h3>
          <div className="bg-white p-4 flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-black text-xl">CA:</span>
              <span className="text-black font-mono font-normal text-xl">{contractAddress}</span>
            </div>
            <Button onClick={copyAddress} className="bg-[#c41220] hover:bg-[#a00e1a] font-normal text-lg">
              <CopyIcon className="mr-2 h-5 w-5" />
              Copy Address
            </Button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Chase Hero Memes are intended to function as an expression of support for, and engagement with, the ideals
            and beliefs embodied by the symbol "$HERO" and the associated artwork, and are not intended to be, or to be
            the subject of, an investment opportunity, investment contract, or security of any type.
            GetChaseHeroMemes.com is not political and has nothing to do with any political campaign or any political
            office or governmental agency.
          </p>
        </div>
      </div>
    </section>
  )
}

