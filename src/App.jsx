import { useState } from "react"
import { CipherPage } from "./components/CipherPage"
import { BruteForce } from "./components/BruteForce"
import { ProsesCipher } from "./components/ProsesCipher"


function App() {
  const[type, setType] = useState(true)
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-[50vw] p-8 h-auto gap-4 bg-white flex flex-col items-center justify-center rounded-md shadow-[0px_0px_5px_-2px_black]">
        <div className="w-[45vw] h-16">
          <div
            className="flex items-center justify-between rounded-md w-full h-full bg-gray-100 p-1 text-sm"
          >
            <button
              onClick={() => setType(false)}
              className={`rounded-md w-[48%] h-full flex items-center justify-center transition-all ${
                !type ? "bg-white shadow font-medium" : "text-gray-400"
              }`}
            >
              BruteForce
            </button>
            
            <button
            onClick={() => setType(true)}
              className={`rounded-md w-[48%] h-full flex items-center justify-center transition-all ${
                type ? "bg-black text-white shadow font-medium" : "text-gray-400"
              }`}
            >
              Cipher Text
            </button>
          </div>
        </div>
      {type ? <CipherPage/> : <BruteForce/>}
      </div>
    </div>
  )
}

export default App
