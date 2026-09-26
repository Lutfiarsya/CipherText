import { useState } from "react"

export const BruteForce = () => {
    const [cipherValue, setCipherValue] = useState('')
    const [plainText, setPlainText] = useState([])

    const handleBruteForce = (cipher) => {
        const resultBrute = []

        for(let shift = 1; shift < 26; shift++){
            let decrypt = " "

            for(const char of cipher.toUpperCase()){
                if(char >= "A" && char <= 'Z'){
                    const codeAscii = ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65
                    decrypt += String.fromCharCode(codeAscii)
                }else{
                    decrypt += char
                }
            }
            resultBrute.push({
                key: shift,
                resultPlainText: decrypt
            })
        }
        setPlainText(resultBrute)
    }

    console.log(plainText)
    return(
        <div className="w-full h-full flex flex-col gap-6 overflow-y-auto">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Cipher Text
                    </label>

                    <input
                        value={cipherValue}
                        onChange={(e) => setCipherValue(e.target.value)}
                        className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                        placeholder="Input PlainText"
                    />
                </div>

            <button
                onClick={() => handleBruteForce(cipherValue)}
                className="w-full h-12 shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
                Brute
            </button>

            <div className="grid grid-cols-5 gap-2">
                {plainText.map((items) => {
                    return(
                        <h2>Key {items.key} : {items.resultPlainText}</h2>
                    )
                })}
            </div>
        </div>
    )
}