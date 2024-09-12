import ListingItem from '@/components/ListingItem'
import { defineOneEntry } from 'oneentry'

const { Products } = defineOneEntry('https://sahandestate2.oneentry.cloud', {
  token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
});

export default function Listings() {
  return (
    <div>
      Hello world
    </div>
  )
}
