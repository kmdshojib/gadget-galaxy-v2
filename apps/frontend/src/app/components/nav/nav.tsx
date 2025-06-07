"use client"

import { useState } from "react"
import { ChevronDown, Search, ShoppingCart, Heart, MapPin, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation' 
import Logo from "./Logo"
import { navLinks } from "../../data/navlinks"
import NavLink from "./NavLink"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname() 

    return (
        <nav className="w-full text-[#ededed]">

            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Logo />

                <div className="hidden md:flex items-center flex-1 max-w-xl mx-4 border border-[#4a5561]/30 rounded-md bg-[#4a5561]/20">
                    <div className="relative">
                        <button className="flex items-center gap-1 px-3 py-2 bg-white rounded-l-md border-r border-[#4a5561]/30">
                            Vegetables
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full py-2 px-4 bg-white text-[#3d4750] rounded-r-md focus:outline-none focus:ring-1 focus:ring-[#8093e0] placeholder-[#3d4750]/50 border-[#3d4750]"
                        />
                        <button title="button" className="absolute right-2 top-1/2 -translate-y-1/2">
                            <Search className="h-5 w-5 text-#3d4750" />
                        </button>
                    </div>
                </div>


                <div className="flex items-center gap-4">

                    <div className="hidden sm:flex flex-col items-end">
                        <span className="text-xs text-[#3d4750]/70">Account</span>
                        <span className="font-medium text-[#3d4750]">Login</span>
                    </div>


                    <div className="relative">
                        <Link href="/wishlist" className="flex flex-col items-center">
                            <Heart className="h-6 w-6 text-[#3d4750]" />
                            <div className="absolute -top-1 -right-1 bg-[#8093e0] text-[#0a0a0a] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </div>
                            <span className="text-xs mt-1 hidden sm:block text-[#3d4750]">Wishlist</span>
                        </Link>
                    </div>

                    {/* Cart */}
                    <div className="relative">
                        <Link href="/cart" className="flex flex-col items-center">
                            <ShoppingCart className="h-6 w-6 text-[#3d4750]" />
                            <div className="absolute -top-1 -right-1 bg-[#8093e0] text-[#0a0a0a] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                4
                            </div>
                            <span className="text-xs mt-1 hidden sm:block text-[#3d4750]">Cart</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="border-t border-[#4a5561]/30">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <div
                        className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static left-0 right-0 top-full bg-[#0a0a0a] md:bg-transparent z-50 border-b md:border-b-0 border-[#4a5561]/30 md:space-x-8`}
                    >
                        <>
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={index}
                                    href={link.href}
                                    label={link.label}
                                    icon={link.icon}
                                    // highlight={link.highlight}
                                    isActive={pathname === link.href}
                                />
                            ))}
                        </>
                    </div>

                </div>
            </div>

            {/* Mobile Search - Only visible on mobile when menu is open */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden px-4 py-3 border-b border-[#4a5561]/30`}>
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full py-2 px-4 bg-[#4a5561]/20 text-[#ededed] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8093e0] placeholder-[#ededed]/50"
                    />
                    <button title="btn" className="absolute right-2 top-1/2 -translate-y-1/2">
                        <Search className="h-5 w-5 text-[#ededed]/70" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
