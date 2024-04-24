import { useState } from "react";
import { ContainerLayaout } from "./utilis/layout";

export function Suma(){
    const [v1, valor1] = useState(0);
    const [v2, valor2] = useState(0);
   
    const v1s = (event) =>{
        valor1(parseInt(event.target.value))
    }
    const v2s = (event) =>{
        valor2(parseInt(event.target.value))
    }

   const suma  = () =>{
       alert(v1 + v2);
   }

   return (
    <div>
        <ContainerLayaout />

        <div className="text-center mt-[5rem]">
            <h1 className="text-2xl">Suma de valores</h1>
           <input type="number" value={v1} onChange={v1s}  className=" m-2 w-3/12 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" /> <br />
   
           <input type="number" value={v2} onChange={v2s} className="m-2 w-3/12 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" /> <br />
             
           <button onClick={suma} className="bg-red-600 rounded-md border-dashed m-2">sumar</button>
        </div>
    </div>
   );
}