import React, { useState } from "react";
import { ContainerLayaout } from "../components/utilis/layout";
import { CreateClient, GetData } from "../services/Service";
import Modal from "../components/Modal"; 

export function PageApi() {
  const data = GetData();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    color: "",
    price: "",
    error: {},
  });
 
  const is= {
    creating : false,
    editing : false
  }

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [providen, setProviden] = useState(''); 

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      error: {
        ...prevData.error,
        [name]: "",
      },
    }));
  };

  const validatorForm = () => {
    const error = {};
    if (!formData.name) {
      error.name = "Name requiered";
    }
    if (!formData.category) {
      error.category = "Category requiered";
    }
    if (!formData.color) {
      error.color = "Color requiered";
    }

    if (!formData.price) {
      error.price = "Price requiered";
    }
    setFormData((prevData) => ({
      ...prevData,
      error,
    }));
    return Object.keys(error).length === 0;
  };

  const Origins = (origin) => {
    if(origin === 'creating'){
      is.creating = true
      setIsModalOpen(true)
      setProviden('creating') 
    }else if(origin === 'editing'){
        is.editing = true
        setIsModalOpen(true)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validatorForm()) {
      if (is.creating === true) {
        CreateClient(formData);
      } else if (is.editing === true) {
     }
      alert("Usuario registrado");
    } else {
      alert("El usuario no se pudo registrar");
    }
  };

  return (
    <div>
      <ContainerLayaout />
      <div className="overflow-x-auto">
      <button onClick={() => Origins('creating') } class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear</button>
        <table className="mt-6 min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Nombre</th>
              <th className="border border-gray-300 px-4 py-2">Color</th>
              <th className="border border-gray-300 px-4 py-2">Categoría</th>
              <th className="border border-gray-300 px-4 py-2">Precio</th>
              <th className="border border-gray-300 px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((c) => (
              <tr key={c.id}>
                <td className="border border-gray-300 px-4 py-2">{c.id}</td>
                <td className="border border-gray-300 px-4 py-2">{c.name}</td>
                <td className="border border-gray-300 px-4 py-2">{c.color}</td>
                <td className="border border-gray-300 px-4 py-2">{c.category}</td>
                <td className="border border-gray-300 px-4 py-2">{c.price}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="m-2" onClick={() => setIsModalOpen(true)}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        formData={formData}
        origins={ providen}
        handleChange={handleChange}
      />
    </div>
  );
}
