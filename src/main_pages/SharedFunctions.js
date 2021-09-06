import { URL_BACK } from "../GlobalValues";

export const checkLoginDirect = (token) => fetch(`${URL_BACK}authentication/api/checklogin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
              'Authorization' : 'Bearer '+ token }, 
    credentials: 'include'  
  }) 