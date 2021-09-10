import React, {useState, useEffect } from 'react';
import fetch from 'unfetch';
import { URL_BACK } from '../../GlobalValues';



const useForm = (initialValues, fromRegister) => {
        
        const [values , setValues] = useState ({
            username : initialValues.username ,
            firstName : initialValues.userDetails.firstName,
            lastName :  initialValues.userDetails.lastName, 
            phoneNumber : initialValues.userDetails.phoneNumber,
            role : ""
        })
        const [updateSucess, setUpdateSucess] = useState(false);
    
        const handleChange = e => {
            const {name , value} = e.target;
            setValues({
                ...values,
                [name] : value
            });
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            const request = await fetch(`${URL_BACK}profile/setup`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' ,
                          'Authorization' : 'Bearer '+ initialValues.accessToken },
                credentials : 'include',
                body: JSON.stringify({...values , usernameChanged : true})
            })
            const requestStatus = await request.status;
            if (requestStatus == 200) {
                setUpdateSucess(true)
            }
        }
        return {handleChange, values, handleSubmit, updateSucess}
    

    
}


export default useForm