import { useState,useCallback, useEffect } from 'react'



function App() {

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    let passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed) str +=  "0123456789";
        if(charAllowed) str += "!@#$%^&*()_+?{}~`";

        for(let i= 0; i<length; i++){
            let char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char)
        }
       setPassword(pass) 
    },[length, numberAllowed, charAllowed, setPassword])


    useEffect(()=>{
        passwordGenerator()
    },[length, numberAllowed, charAllowed, setPassword])

    // useEffect(()=>{
    //     alert(`Hiii man`)
    // }, [])
    

  return(
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
                <div className="mb-4">
                    <label className="block mb-2">Password Length</label>
                    <input className='p-1'
                    type="number"
                    value={length} 
                    onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > 0) {
                    setLength(value); // Update state only if value is greater than 0
        }
    }}
/>
<button className='ml-2 rounded-sm py-1 bg-orange-500 text-white inset-x-0 px-4'>Copy</button>

                </div>
                <div className="mb-4">
                    <label className="block mb-2">
                    <input
                            type="checkbox"
                            checked= {numberAllowed}
                            onChange={(e)=>setNumberAllowed(e.target.checked)}
                           
                        />
                        Allow Numbers
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">
                        <input
                            type="checkbox"
                            checked={charAllowed}
                            onChange={(e)=>{setCharAllowed(e.target.checked)}}
                           
                        />
                        Allow Special Characters
                    </label>
                </div>
                <button
                    onClick={passwordGenerator}
                    className="w-full bg-orange-500 text-white p-2 rounded"
                >
                    Generate Password
                </button>
                <div className="mt-4">
                    <label className="block mb-2">Generated Password</label>
                    <input
                        type="text"
                        readOnly
                        value={password}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    />
                </div>
            </div>
        </div>
    </>
  )

}

export default App
