import { Link } from "react-router-dom";

export function ContainerLayaout() {
    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/"  className="text-xl font-bold mr-6">Home</Link>
                    <Link to="/prueba"  className="text-xl font-bold mr-6">Tabla</Link>
                    <Link to="/suma" className="text-xl font-bold mr-6">Suma</Link>
                    <Link to="/con" className="text-xl font-bold mr-6" >Cronometro</Link>
                    <Link to="/cliente" className="text-xl font-bold">Cliente</Link>
                </div>
            </div>
        </div>
    );
}
