import axios from "axios"

interface SubmitCredentialUpdateProps {
    email: string
    phone: string
    name: string
    address: string
}

export const submitCredentialUpdate = ({email, phone, name, address}:SubmitCredentialUpdateProps): null => {
    const url: string = "http://127.0.0.1:4000/user/update/credentials"
    const sessionId: string | null = localStorage.getItem("sessionId")
    axios.put(url, {
        "session_id": sessionId,
        "email": email,
        "phone": phone,
        "name": name,
        "address": address
    })
    .then( response =>{
        alert("Credentials updated.")
    })
    .catch( error => {
        alert("You are not logged in.")
    })

    return null
}