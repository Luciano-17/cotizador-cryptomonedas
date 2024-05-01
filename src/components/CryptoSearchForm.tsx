import { useState, ChangeEvent, FormEvent } from "react"
import { currencies } from "../data"
import { useCryptosStore } from "../store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

const CryptoSearchForm = () => {
    const {cryptoCurrencies, fetchData} = useCryptosStore()
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptoCurrency: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        fetchData(pair)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                    <select 
                        name="currency" 
                        id="currency"
                        value={pair.currency}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione --</option>
                        {currencies.map(currency => (
                            <option 
                                key={currency.code}
                                value={currency.code}
                            >
                                {currency.name}
                            </option>
                        ))}
                    </select>
            </div>

            <div className="field">
                <label htmlFor="cryptoCurrency">Criptomoneda:</label>
                    <select 
                        name="cryptoCurrency" 
                        id="cryptoCurrency"
                        value={pair.cryptoCurrency}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione --</option>
                        {cryptoCurrencies.map(crypto => (
                            <option 
                                key={crypto.CoinInfo.FullName}
                                value={crypto.CoinInfo.Name}
                            >
                                {crypto.CoinInfo.FullName}
                            </option>
                        ))}
                    </select>
            </div>

            <input 
                type="submit" 
                value="Cotizar"
            />
        </form>
    )
}

export default CryptoSearchForm