import { Button } from "@/components/ui/button"
import { CopyIcon } from "lucide-react"

export default function ContractAddress() {
  const contractAddress = "dVDRtrzfttofjHuhxPtJjTQb2UEw7rvxSbgy9J6pump"

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <div className="bg-[#070735] p-8 rounded-[40px] max-w-5xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Solana Contract Address</h2>
      <div className="bg-white rounded-lg p-4 flex items-center justify-between mb-4">
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
        Chase Hero Memes are intended to function as an expression of support for, and engagement with, the ideals and
        beliefs embodied by the symbol "$HERO" and the associated artwork, and are not intended to be, or to be the
        subject of, an investment opportunity, investment contract, or security of any type. ChaseHeroMeme.com is
        not political and has nothing to do with any political campaign or any political office or governmental agency.
      </p>
    </div>
  )
}

