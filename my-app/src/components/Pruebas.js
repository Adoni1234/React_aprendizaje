import React, { useState } from 'react';
import { ContainerLayaout } from './utilis/layout';

export function Pruebas(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('')
    const [array, setArray] = useState([{nombre : '', apellido : ''}]);
  
    const cambio = (event) => {
      setNombre(event.target.value);
    };
  
    const apellidos = (event) => {
      setApellido(event.target.value)
    }
  
    const change = () => {
      setArray([...array, {nombre, apellido}]);
    };
  
    return (
      <div>
        <ContainerLayaout />
        <input
        className='Input border-red-500'
          type="text"
          value={nombre}
          onChange={cambio}
          placeholder="Ingresa tu nombre"
        />
        <input
          type="text"
          value={apellido}
          onChange={apellidos}
          placeholder="Ingresa tu nombre"
        />   
        
        <button onClick={change} className='bg-blue-500 text-10 rounded-md mt-2'> Ingresar</button>
        <h1>{nombre}  {apellido}</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <h1 className="text-2xl font-bold mb-4">Tabla de Nombres</h1>
         <table className="w-full border-collapse border border-gray-300">
           <thead>
             <tr>
               <th className="p-2 border border-gray-300">ID</th>
               <th className="p-2 border border-gray-300">Nombre</th>
               <th className="p-2 border border-gray-300">Apellido</th>
             </tr>
           </thead>
           <tbody>
             {array.map((nombre, index) => (
               <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                 <td className="p-2 border border-gray-300">{index + 1}</td>
                 <td className="p-2 border border-gray-300">{nombre.nombre}</td>
                 <td className="p-2 border border-gray-300">{nombre.apellido}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
      </div>
    );
}