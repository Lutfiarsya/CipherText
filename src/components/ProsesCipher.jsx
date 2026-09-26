export const ProsesCipher = ({PlainText, keyValue, cipher, ascii, shifted}) => {

    // Mapping code ASCII tiap huruf
    const charCode = [...PlainText.toUpperCase()]
    .map((char, code) => `${char} = ${[...ascii][code]}`)
    .filter((_, code) => shifted[code] !== 32)
    
    // Mapping huruf setelah di kombinasikan dengan key
    const charCodeShifted = [...cipher.toUpperCase()]
    .map((char, code) => `${[...shifted][code]} = ${char}`)
    .filter((_, code) => shifted[code] !== 32)
    return(
        <div >
            {PlainText || keyValue || cipher || ascii || shifted ? 
            <div className="flex flex-col items-start gap-4 justify-center">
                <div className="flex flex-col justify-center text-xl font-semibold">
                    <h2>Plaintext</h2>
                    <h2>{PlainText}</h2>
                </div>

                <div className="flex flex-col justify-center text-xl font-semibold">
                    <h2>Key</h2>
                    <h2>{keyValue}</h2>
                </div>

                <div className="justify-center w-[50%] text-xl font-semibold">
                    <h2>ASCII setiap huruf</h2>
                    <div className="grid grid-cols-4">
                    {charCode.map((i) => {
                        return(
                                <h2 className="text-gray-700">{i}</h2>
                            )
                        })}
                        </div>
                </div>
                
                <div className="justify-center text-xl font-semibold">
                    <h2>Shifted setiap huruf dengan key</h2>
                    <div className="grid grid-cols-3">
                    {charCodeShifted.map((i) => {
                        return(
                                <h2 className="text-gray-700">{i}</h2>
                            )
                        })}
                        </div>
                </div>
                

                <div className="flex flex-col justify-center text-xl font-semibold">
                    <h2>Cipher Text</h2>
                    <h2>{cipher}</h2>
                </div>
            </div> : 
            <div>Tidak ada encryption</div>}
        </div>
    )
}