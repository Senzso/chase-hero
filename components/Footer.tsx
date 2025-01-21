import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#070735] text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="mb-4 md:mb-0">
            <Image src="/logo.png" alt="CHASE HERO MEME" width={180} height={60} className="object-contain" />
          </Link>
          <div className="flex space-x-4">
            <Link
              href="https://x.com/ChaseHeroMemes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              X.com/ChaseHeroMemes
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between mb-8">
          <Link href="/" className="mx-2 my-1 hover:text-gray-300">
            Home
          </Link>
          <Link href="#about" className="mx-2 my-1 hover:text-gray-300">
            About
          </Link>
          <Link href="#contract-address" className="mx-2 my-1 hover:text-gray-300">
            Contract Address
          </Link>
          <Link href="#how-to-buy" className="mx-2 my-1 hover:text-gray-300">
            How to Buy
          </Link>
          <Link href="#faq" className="mx-2 my-1 hover:text-gray-300">
            FAQ
          </Link>
        </div>
        <p className="text-sm text-center mb-8">
          Chase Hero Memes are intended to function as an expression of support for, and engagement with, the ideals and
          beliefs embodied by the symbol "$HERO" and the associated artwork, and are not intended to be, or to be the
          subject of, an investment opportunity, investment contract, or security of any type. ChaseHeroMeme.com is
          not political and has nothing to do with any political campaign or any political office or governmental
          agency.
        </p>
        <div className="border-t border-gray-600 pt-8">
          <p className="text-sm text-center">© 2025 World Liberty Financial LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

