import { defineOneEntry } from "oneentry";
import { FaMarketAlt } from 'react-icons/fa'
import { Fabed, FaBath } from 'react-icons/fa'

const { Products } = defineOneEntry('https://sahandestate2.oneentry.cloud', {
  token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
  userToken: '',
});

export default async function page() {

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

        </div>
      )}
    </main>
  )
}
