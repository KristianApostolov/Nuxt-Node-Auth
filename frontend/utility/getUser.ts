import axios, { AxiosResponse } from "axios"

const getUser = async (sessionId:  string) => {
    const user: object = await axios.post("http://localhost:4000/user/get", {
        "session_id": sessionId
    })
    .then((response: AxiosResponse) => {
        return response.data.user
    })

    return user
}

export default getUser