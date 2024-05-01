export function SetSessionStoreforCliente(list_object) {
   sessionStorage.setItem('Client', JSON.stringify(list_object))
}

export function SetSessionStore(list_object, name) {
    sessionStorage.setItem(name, JSON.stringify(list_object))
 }

export function get_session_store(name){
   const session = sessionStorage.getItem(name)
   return session
}

export function get_session_login(){
    const loginString = get_session_store('login')

    const Data_login = JSON.parse(loginString);
    const username =  Data_login? Data_login.username : null;
    const password =  Data_login? Data_login.password : null;

    return [username, password]
}

export function removeSession(name) {
    sessionStorage.removeItem(name)
}