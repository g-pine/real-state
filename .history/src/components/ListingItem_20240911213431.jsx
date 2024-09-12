import Link from "next/link"
import { MdLocationOn } from 'react-icons/fa'

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link
        href={`/listing/${listing.id}`}
      >
        <img
          src={
            listing.attributeValues.image.value.downloadLink
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />   
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.attributeValues.title.value}
          </p>
        </div>   
      </Link>
    </div>
  )
}
