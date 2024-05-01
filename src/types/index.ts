import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyResponseScheme, PairSchema, CryptoPriceSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseScheme>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>