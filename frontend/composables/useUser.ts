import axios, {AxiosResponse} from "axios"
import { Router } from "vue-router"

export const useUser = () => {
    return useState("user", ()=> {
        onMounted(async ()=>{
            const router: Router = useRouter()

            const sessionId: string | null = localStorage.getItem("sessionId")
            
            if(sessionId === null && router.currentRoute.value.fullPath  !== "/register") {
                router.push("/login")
                return null
            }
            else if(router.currentRoute.value.fullPath === "/register") {
                return null
            }
        
            const response: AxiosResponse = await axios.post("http://localhost:4000/user/get", {
                "session_id": sessionId
            })
            console.log(response.data)
            return JSON.parse(response.data)
        }) 
    })
}