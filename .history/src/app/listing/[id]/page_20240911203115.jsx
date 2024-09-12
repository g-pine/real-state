import { defineOneEntry } from "oneentry";
import { FaMarketAlt } from 'react-icons/fa'
import { Fabed, FaBath } from 'react-icons/fa'

const { Products } = defineOneEntry('https://sahandestate2.oneentry.cloud', {
  token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
  userToken: '',
});