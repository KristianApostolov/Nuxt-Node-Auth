import axios from "axios"
import { Router } from "vue-router"

export const useUser = (): Object => {
    return useState("user", async ()=> {
        const router: Router = useRouter()

        const session_id: string | null = localStorage.getItem("session_id")

        if(session_id === null){
            router.push("/login")
            return null
        }
        
        return axios.post("/user/get",{
            "session_id": session_id
        }).then( response =>{
        console.log(response.data)
            return response.data
        })
    })
}