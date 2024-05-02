import { useEffect, useState } from "react";

export function GetData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7271/api/Values")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return data;
}

export function CreateClient(data) {
    const postData = async () =>{
        try {
            const response = await fetch("https://localhost:7271/api/Values", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(data)
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log('error al insertar los datos', error);
        }
    }
        postData();
    return null;
}

export function EditClient(data, id) {
    const postData = async () => {
        try{
            const response = fetch(`https://localhost:7271/api/Values?id=${id}`, {
                method : "PUT",
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(data),
                id : id
            })
            const responseData = (await response).json
            alert(responseData)
        }
        catch (error) {
            console.log('error al insertar los datos', error);
        }
    }
    postData();
    return null
}

export function DeleteClient(id) {
    const deleteData = async () => {
        try {
            const response = await fetch(`https://localhost:7271/api/Values?id=${id}`, {
                method: "DELETE"
            });
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log('Error al eliminar los datos', error);
        }
    };
    deleteData();
}

export async function authLogin(data) {
    try {
        const response = await fetch('https://localhost:7271/api/login/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
        
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
        throw new Error('Hubo un error en la autenticación: ' + error.message);
    }
}

export async function register(data){
    try{
       const response = await fetch('https://localhost:7271/api/login/register', {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
       })
       
       if(!response.ok){
        throw new Error('Error en la solicitud: ' + response.status)
       }

      const responseData = (await response).json();
      return responseData
       
    }
    catch (error) {
        console.log(error)
        throw new Error('Hubo un error en la autenticación: ' + error.message)
    }
}
