"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="bg-[#070735] rounded-[40px] py-4 px-6 max-w-5xl mx-auto mb-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/logo-1HlCQGQFNK7BZXGf0Nf8HvN5Z6OdsG.png"
            alt="CHASE HERO MEME"
            width={180}
            height={60}
            className="object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white text-lg">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white text-lg">
            About
          </Link>
          <Link href="#contract-address" className="text-gray-300 hover:text-white text-lg">
            Contract Address
          </Link>
          <Link href="#how-to-buy" className="text-gray-300 hover:text-white text-lg">
            How to Buy
          </Link>
          <Link href="#faq" className="text-gray-300 hover:text-white text-lg">
            FAQ
          </Link>
          <Link href="#how-to-buy">
            <Button className="bg-[#c41220] hover:bg-[#a00e1a] text-white text-lg rounded-[40px]">Buy Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

