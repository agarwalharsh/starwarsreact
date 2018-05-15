export function login(localnext) {    
    return fetch(localnext);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}