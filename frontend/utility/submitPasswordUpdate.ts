import axios from "axios"

interface SubmitPasswordUpdate {
    oldPassword: string
    newPassword: string
    repeatNewPassword: string
}

export const submitPasswordUpdate = ({oldPassword, newPassword, repeatNewPassword}:SubmitPasswordUpdate): null => {
    if(newPassword !== repeatNewPassword){
        alert("New passwords do not match.")
        return null
    }
    
    const url: string = "http://127.0.0.1:4000/user/update/password"
    const sessionId: string | null = localStorage.getItem("sessionId")
    axios.put(url, {
        "session_id": sessionId,
        "old_password": oldPassword,
        "new_password": newPassword
    })
    .then( response =>{
        alert("Password updated.")
    })
    .catch( error => {
        alert("Wrong password.")
    })

    return null
}