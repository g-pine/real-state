import ListingItem from "@/components/ListingItem"
import Link from "next/link"
import { defineOneEntry } from "oneentry"

const { Products } = defineOneEntry('https://sahandestate2.oneentry.cloud', {
  token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
});

export default async function page() {

  const rentListings = await Products.getProductsByPageUrl('rent');
  const saleListings = await Products.getProductsByPageUrl('sell');
  const AllListings = await Products.getProductsByPageUrl('listings');

  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br/>
          place with ease
        </h1>      
      </div>   
    </div>
  )
}
