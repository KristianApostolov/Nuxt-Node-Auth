import getUser from "./getUser"

export const checkForUser = async (user: any) => {
    const sessionId: string | null = localStorage.getItem("sessionId")
      console.log(sessionId)
      if(!sessionId) {
        user.value = false
        return
      }
      user.value = await getUser(sessionId)
}