"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopyIcon } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [contractAddress] = useState("dVDRtrzfttofjHuhxPtJjTQb2UEw7rvxSbgy9J6pump")

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <div className="bg-[#070735] rounded-[40px] overflow-hidden max-w-6xl mx-auto p-8 mt-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            THE ONLY
            <br />
            <span className="text-[#c41220]">OFFICIAL</span>
            <br />
            CHASE HERO
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-300">Join the HERO Community. This is History in the Making!</p>
          <div className="pt-4">
            <Link href="#how-to-buy">
              <Button size="lg" className="bg-[#c41220] hover:bg-[#a00e1a] text-white px-8 py-6 text-xl">
                Buy
              </Button>
            </Link>
          </div>
          <p className="text-xl text-gray-400 italic">"Celebrate Our Win & Have Fun!"</p>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/herocoin.png"
            alt="CHASE HERO"
            width={600}
            height={800}
            className="object-contain w-full"
            priority
          />
        </div>
      </div>
      <div id="contract-address" className="mt-12">
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
          Chase Hero Memes are intended to function as an expression of support for, and engagement with, the ideals and
          beliefs embodied by the symbol "$HERO" and the associated artwork, and are not intended to be, or to be the
          subject of, an investment opportunity, investment contract, or security of any type. ChaseHeroMeme.com is
          not political and has nothing to do with any political campaign or any political office or governmental
          agency.
        </p>
      </div>
    </div>
  )
}

