import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <>
            <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#8093e0]/20 flex items-center justify-center mt-2">
                    <div className="w-8 h-8 rounded-full bg-[#8093e0]/40 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#8093e0] flex items-center justify-center">
                            <span className="text-[#0a0a0a] font-bold text-xs">GG</span>
                        </div>
                    </div>
                </div>
                <span className="text-xl font-bold text-[#8093e0]">
                    <span className='text-[10px]'>Gadget</span> <br />
                    <span className="text-[#3d4750]">Galaxy</span>
                </span>
            </Link>
        </>
    )
}

export default Logo