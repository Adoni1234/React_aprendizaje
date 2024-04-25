import { useState } from "react";
import { SetSessionStore } from "../components/utilis/Utilitis";

export function Register() {
    const [FormData, setFormData] = useState({
        username : '',
        email : '',
        password : '',
        error : ''
    })

    const [confirmarContraseña, SetConfirmarContraseña] = useState('');
    const SetConfinPass = (event) => {
      SetConfirmarContraseña(event.target.value)
    }
    const  handleChange = (event) => {
        const {name , value} = event.target
        setFormData((prevData) => ({
            ...prevData, 
            [name] : value,
            error : {
                ...prevData.error,
                [name] : ""
            }
        }))
    }

    const ValidateForm = () => {
      const error = {}

      if(!FormData.username){
         error.username = 'Username requiered'
      }
      if(!FormData.email){
        error.email = 'Email requiered'
     }
     if(!FormData.password){
        error.password = 'Password requiered'
     }

     setFormData((prevData) => ({...prevData, error}))
     return Object.keys(error).length === 0
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(ValidateForm()){
          if(confirmarContraseña === FormData.password) {
            SetSessionStore(FormData, 'login')
            window.location.href = '/';
            alert('Registro Exitoso')
          }else{
            alert('password diferentes') 
          }
        }else{
            alert('Formulario Invalidos')
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Registro</h2>
            <form onSubmit={handleSubmit} >
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  onChange={handleChange}
                  value={FormData.username}
                  type="text"
                  id="nombre"
                  name="username"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="username"
                />
                {FormData.error.username && (
                    <span className="text-red-500 text-md">{FormData.error.username}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  onChange={handleChange}
                  value={FormData.email}
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Correo electrónico"
                />
                {FormData.error.email && (
                    <span className="text-red-500 text-md">{FormData.error.email}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="contraseña" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  onChange={handleChange}
                  value={FormData.password}
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Contraseña"
                />
                {FormData.error.password && (
                    <span className="text-red-500 text-md">{FormData.error.password}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="confirmarContraseña" className="block text-sm font-medium text-gray-700">
                  Confirmar contraseña
                </label>
                <input
                  onChange={SetConfinPass}
                  value={confirmarContraseña}
                  type="password"
                  id="confirmarContraseña"
                  name="confirmarContraseña"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Confirmar contraseña"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      );
    }
