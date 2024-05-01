import { useMemo } from "react"
import { useCryptosStore } from "../store"
import Spinner from "./Spinner"

const CryptoPriceDisplay = () => {
    const {result, loading} = useCryptosStore()
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>

                    <div className="result">
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="imagen cryptomoneda"
                        />

                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CryptoPriceDisplay