import { Star } from 'lucide-react'
import React from 'react'

const ProductCard = () => {
    return (
        <div className="border border-[#eee] rounded-[20px] max-w-[260]
        ">
            <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-t-[20px] h-50 bg-gray-500" />
            <div className=" mb-2 px-3 py-2">
                <div className='flex flex-row justify-between'>
                    <span className="text-secondary lg:text-[12px] text-[10px] ">Sub Title</span>
                    <div className='flex flex-row items-center gap-1'>
                        <Star className='w-[14px] h-[14px] text-primary' />
                        <Star className='w-[14px] h-[14px] text-primary' />
                    </div>
                </div>
                <h2 className="text-secondary lg:text-base text-sm hover:text-primary font-[600] cursor-pointer font-quicksand py-3">Title</h2>
                <div className='flex flex-row justify-between'>
                    <div className="flex flex-row">
                        <p className="text-[#686e7d] lg:text-sm text-xs font-bold">$10</p>
                        <p className="text-[#686e7d] lg:text-sm text-xs font-bold line-through pl-3">$12</p>
                    </div>
                    <div>
                        <p className="text-[#686e7d] lg:text-sm text-xs font-medium">2 left</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard