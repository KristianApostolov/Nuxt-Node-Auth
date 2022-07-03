import axios, { AxiosResponse } from "axios"

interface FormSubmitProps {
    email: string
    password: string
    url: string     
}

export const useFormSubmit = ({email, password, url}:FormSubmitProps): any => {
    return useState("formSubmit", ()=> {
        axios.post(url, {
            "email": email,
            "password": password
        })
        .then( response =>{
            return response.data
        })
        // Add error handling here
    })
}