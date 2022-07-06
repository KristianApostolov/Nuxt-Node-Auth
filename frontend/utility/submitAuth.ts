import axios from "axios"
import { Router } from "vue-router"

interface FormSubmitProps {
    email: string
    password: string
    url: string
    isLogin: boolean    
}

export const submitAuth = ({email, password, url, isLogin}:FormSubmitProps): void => {
    axios.post(url, {
        "email": email,
        "password": password
    })
    .then( response =>{
        localStorage.setItem("sessionId", response.data.session_id)    
        const router: Router  = useRouter()
        router.push("/")

    })
    .catch( () => {
        alert(isLogin ? "Wrong email or password." : "Email is already in use.")
    })

}