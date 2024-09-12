import { defineOneEntry } from "oneentry";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Fabed, FaBath } from 'react-icons/fa'

const { Products } = defineOneEntry('https://sahandestate2.oneentry.cloud', {
  token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
  userToken: '',
});

export default async function page({ params }) {

  const listing = await Products.getProductById(params.id);
  console.log(listing.attributeValues, 'product');

  return (
    <main>
      {listing && listing.statusCode !== 404 && (
        <div>
          <img
            src={listing.attributeValues.image.value.downloadLink}
            className='w-full h-[550px] object-cover'
          />
          <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
            <p className='text-2xl font-semibold'>
              {listing.attributeValues.title.value} - ${' '}
              {listing.attributeValues.price.value.toLocaleString('en-US')}
              {listing.attributeValues.type.value.title === 'rent' && ' / month'}              
            </p>
            <p className='flex items-center mt-6 gap-2 text-slate-600 text-sm'>
              <FaMapMarkerAlt className='text-green-700'/>
              {listing.attributeValues.address.value}
            </p>
            <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>

            </p>
          </div>
        </div>
      )}
    </main>
  )
}
