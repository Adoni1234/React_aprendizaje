import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get_session_login, removeSession } from "./Utilitis";

export function ContainerLayaout() {
    const [username, setUsername] = useState('')

    useEffect(() => {
        lookFor();
    }, []);

    const lookFor = () => {
        const profile = get_session_login();
        setUsername(profile[0]) 
    }

    const closeSession = () => {
        removeSession('login');
    }

    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/"  className="text-xl font-bold mr-6">Home</Link>
                    <Link to="/prueba"  className="text-xl font-bold mr-6">Tabla</Link>
                    <Link to="/suma" className="text-xl font-bold mr-6">Suma</Link>
                    <Link to="/con" className="text-xl font-bold mr-6" >Cronometro</Link>
                    <Link to="/cliente" className="text-xl font-bold mr-6">Cliente</Link>
                    <Link to="/api" className="text-xl font-bold mr-6">Conexion Api</Link>
                    <Link onClick={closeSession} to="/" className="text-xl font-bold">Cerrar session</Link>
                    
                </div>
                <h2 className="text-xl font-bold mr-6">{username}</h2>
            </div>
        </div>
    );
}
