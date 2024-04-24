import { useState } from "react"
import { ContainerLayaout } from "./utilis/layout"


export function ClientePage(){

    const [array , setArray] = useState([{name : '', LastName : ''}])
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(0);

    const [formData, setFormData] = useState({
      name : "",
      lastName : "",
      error : {}
    })

    const handleChange = (event) => {
      const { name, value } = event.target;
    
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        error: {
          ...prevData.error,
          [name]: "" 
        }
      }));
    };

    const validateForm = () => {
      const error = {};

      if(!formData.name)
      {
        error.name = "name requered"
      }

      if(!formData.lastName)
      {
        error.lastName = "lastName requiered"
      }

      setFormData((prevdata) => ({...prevdata, error}))

      return Object.keys(error).length === 0;
    }
    
    const SetArray = () => {
      const newClient = {
        name: formData.name,
        LastName: formData.lastName
      };
      setArray([...array, newClient]);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
    
      if(validateForm()) { // Llama a la función validateForm
        alert("Formulario válido");
      (isEditing) ? modify(): SetArray()
      FormReset()
      } else {
        alert("Formulario inválido");
      }
    };

    const  edit = (data, index) => {
        formData.name = data.name
        formData.lastName = data.LastName
        setIsEditing(true)
        setEditingIndex(index)
    }
    
    const modify = () => {
      const newClient = [...array]
      const index = editingIndex
      newClient[index].name = formData.name
      newClient[index].LastName = formData.lastName
      setIsEditing(false)
      FormReset()
      alert('Cliente modificado')
    }
    
    const deletes = (index) => {
      const newArray = [...array]
      newArray.splice(index, 1)
      setArray(newArray)
      alert('cliente eliminado')
    }

    const FormReset = () =>{
       formData.name = ''
       formData.lastName = ''
    }

    return(
      <div className="overflow-x-auto">
        <ContainerLayaout />
        <div className=" m-2 flex items-center space-x-4">
        <form onSubmit={handleSubmit}>
          <input 
            onChange={handleChange}
            value={formData.name}
            type="text" 
            placeholder="name"
            name="name" 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {formData.error.name && (
            <p style={{ color: "red" }}>{formData.error.name}</p>
          )}
          <input 
            onChange={handleChange}
            value={formData.lastName}
            type="text" 
            placeholder="lastName"
            name="lastName" 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {formData.error.lastName && (
            <p style={{ color: "red" }}>{formData.error.lastName}</p>
          )}

         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{ isEditing? 'editar' : 'agregar'}</button>
        </form>
        </div>
         <table className="min-w-full divide-y divide-gray-200">
           <thead className="bg-gray-50">
             <tr>
               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 ID
               </th>
               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Nombre
               </th>
               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Apellido
               </th>
               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 **
               </th>
             </tr>
           </thead>
           <tbody className="bg-white divide-y divide-gray-200">
           {array.map((c, index) => (
               <tr key={index}>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.name}</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.LastName}</td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="m-2" onClick={() => edit(c, index)}>editar</button>
                  <button onClick={() => deletes(index)}>eliminar</button>
                  </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>

    )
}