import getUser from "./getUser"

export const checkForUser = async (user: any) => {
    const sessionId: string | null = localStorage.getItem("sessionId")
    if(!sessionId) {
        user.value = null
        return
    }
    user.value = await getUser(sessionId)
}