import { useState } from "react"

function App() {

  const [color, setColor] = useState("green")
  return(
    <div className="w-full h-screen duration-200" style={{background:color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

    <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-red px-3 py-2 rounded-3x">

<button
onClick={() => setColor("red")}
style={{background:"red"}}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg">red</button>
<button
onClick={() => setColor("skyblue")}
style={{background:"skyblue"}}
className="outline-none px-4 py-1 rounded-full text-black shadow-lg">sky blue</button>
<button
onClick={() => setColor("pink")}
style={{background:"pink"}}
className="outline-none px-4 py-1 rounded-full text-black shadow-lg">pink</button>
<button
onClick={() => setColor("purple")}
style={{background:"purple"}}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg">purple</button>
<button
onClick={() => setColor("grey")}
style={{background:"grey"}}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg">grey</button>
<button
onClick={() => setColor("black")}
style={{background:"black"}}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg">black</button>
<button
onClick={() => setColor("aqua")}
style={{background:"aqua"}}
className="outline-none px-4 py-1 rounded-full text-black shadow-lg">aqua</button>
<button
onClick={() => setColor("yellow")}
style={{background:"yellow"}}
className="outline-none px-4 py-1 rounded-full text-black shadow-lg">yellow</button>
<button
onClick={() => setColor("lightgreen")}
style={{background:"lightgreen"}}
className="outline-none px-4 py-1 rounded-full text-black shadow-lg">lightgreen</button>
<button
onClick={() => setColor("white")}
style={{background:"white"}}
className="outline-none px-4 py-1 rounded-full text-black shadow-lg">white</button>
<button
onClick={() => setColor("orange")}
style={{background:"orange"}}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg">orange</button>
<button
onClick={() => setColor("magenta")}
style={{background:"magenta"}}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg">magenta</button>
    </div>
</div>
    </div>
  )
}
export default App