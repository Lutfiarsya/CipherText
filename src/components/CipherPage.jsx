
import { useState } from "react"
import { ProsesCipher } from "./ProsesCipher"

export const CipherPage = () => {

    const [plainText, setPlainText] = useState('')
    const [cipherText, setCipherText] = useState('')
    const [ascii, setAscii] = useState('')
    const [shifted, setShifted] = useState('')
    const [key, setKey] = useState(null)
    const [isEncrypted, setIsEncrypted] = useState(false)

    const regex = /^\d*\.?\d*$/

    const handleKey = (e) => {
        const valueKey = e.target.value
        // Regex handler, tpi keknya bakal diubah
        if (regex.test(valueKey)) {
            setKey(valueKey)
        }
    }

    const handlePlainText = () => {
        // proses pertama ubah huruf menjadi uppercase
        const toUpper = [...plainText.toUpperCase()]
        
        if(key == null){
            alert("key harus terisi")
        }else{

            // mengubah huruf menjadi kode ASCII
            const AsciiConvert = toUpper.map((items) => {
                if (items === ' ') {
                    return 32
                }
    
                return items.charCodeAt(0)
            })
    
            // Shifted dengan key
            const CombineAscii = AsciiConvert.map((i) => {
                if (i === 32) {
                    return 32
                }
                if(i + Number(key) >= 90){
                    return (i + Number(key)) - 26
                }
                return i + Number(key)
            })
    
            // kembalikan ke huruf dan menjadi cipherText
            const cipher = CombineAscii.map((cipherValue) => {
                if (cipherValue === 32) {
                    return " "
                }
                // convert ASCII ke huruf
                return String.fromCharCode(cipherValue)
            })
    
            setAscii(AsciiConvert)
            setShifted(CombineAscii)
            setCipherText(cipher.join(''))
            setIsEncrypted(true)
        }
    }

    return (
        <div className="w-full h-full flex flex-col gap-6 overflow-y-auto">

            <div className="w-full space-y-5">

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        PlainText
                    </label>

                    <input
                        onChange={(e) => setPlainText(e.target.value)}
                        value={plainText}
                        className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                        placeholder="Input PlainText"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Key
                    </label>

                    <input
                        value={key}
                        onChange={handleKey}
                        className="w-full h-11 px-4 rounded-lg border border-gray-200 bg-white outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
                        placeholder="Input Key"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Cipher Text
                    </label>

                    <div className="w-full min-h-11 px-4 py-2.5 flex items-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700">
                        {cipherText || (
                            <span className="text-gray-400">
                                Cipher text will appear here
                            </span>
                        )}
                    </div>
                </div>

            </div>

            <button
                className="w-full h-12 shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                onClick={handlePlainText}
            >
                Encryption
            </button>

            <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-5">

                <div className="mb-5">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Algorithm
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Encryption process and ASCII transformation
                    </p>
                </div>

                {isEncrypted ? (
                    <ProsesCipher
                        PlainText={plainText}
                        keyValue={key}
                        cipher={cipherText}
                        ascii={ascii}
                        shifted={shifted}
                    />
                ) : (
                    <div className="py-8 text-center text-sm text-gray-400">
                        Tidak ada data encryption
                    </div>
                )}

            </div>

        </div>
    )
}
