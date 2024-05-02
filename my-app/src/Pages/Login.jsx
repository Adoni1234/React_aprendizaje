import { useState } from "react";
import { Link } from "react-router-dom";
import { authLogin } from "../services/Service";
import { SetSessionStore } from "../components/utilis/Utilitis";

export function Login() {
     
    const [FormData, setFormData] = useState({
       username : '',
       password : '',
       error : {}
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData((prevData) => ({
          ...prevData, 
          [name] : value,
          error : {
            ...prevData.error,
            [name] : ""
          }
        }))
    }

    const ValidateFormData = () => {
        const error = {}
        if(!FormData.username){
           error.username = 'username requiered'
        }

        if(!FormData.password){
            error.password = 'password requiered'
        }

        setFormData((prevData) => ({...prevData, error})) 
        return Object.keys(error).length === 0
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (ValidateFormData()) {
        const response = await authLogin(FormData);
          try {
              if (response.username) { 
                  SetSessionStore(response, 'login')
                  window.location.href = 'home';
              } else {
                  alert('Usuario inválido');
              }
          } catch (error) {
              console.log(error);
              alert('Hubo un error en la autenticación');
          }
      } else {
          alert('Datos inválidos');
      }
  }
  
    

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-80">
            <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
            <form onSubmit={handleSubmit} >
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  value={FormData.username}
                  onChange={handleChange}
                  type="username"
                  id="username"
                  name="username" 
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Usuario"
                />
                {FormData.error.username && (
                    <span className="text-red-500 text-md">{FormData.error.username}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  value={FormData.password}
                  onChange={handleChange}
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
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Iniciar sesión
              </button>
            </form>
            <Link to="/register" className="text-indigo-600 hover:text-indigo-800 text-sm">Aun no te has registrado? <br /> Accede aqui y registrate</Link>
          </div>
        </div>
      );
}