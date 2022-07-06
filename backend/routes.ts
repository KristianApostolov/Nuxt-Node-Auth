import { Router, Request, Response } from "express"

import { update_user_credentials, update_user_password } from "./authentication/credintials_update_utilities"
import { email_is_in_use, get_id_by_session, get_user_by_id, get_user_by_session } from "./authentication/fetch_utilities"
import { verify_password } from "./authentication/password_utilities"
import { create_session, revoke_session } from "./authentication/session"
import { create_user, login_user } from "./authentication/utility"
import { UserType } from "./types"


const router = Router()


router.post("/user/register", async (req: Request, res: Response) => {
    if (await email_is_in_use(req.body.email)) {
        res.status(401).send({ message: "Email is already in use"})
        return 
    }
    const user = await create_user(req.body.email, req.body.password)
    const session_id: string = await create_session(user.id)
    res.status(200).send({ message: "User created.", "session_id": session_id})
})

router.post("/user/login", async (req: Request, res: Response) => {
    const session_id: string | boolean = await login_user(req.body.email, req.body.password)
    if(session_id) {
        res.status(200).send({ message: "User logged in.", "session_id": session_id})
        return
    }
    res.status(401).send({ message: "Invalid email or password"})
    return
})

router.post("/user/logout", async (req: Request, res: Response) => {
    await revoke_session(req.body.session_id) 
    res.status(200).send({ message: "Logout successful"})
})

router.put("/user/update/credentials", async (req: Request, res: Response) => {
    const id: number = await get_id_by_session(req.body.session_id)
    update_user_credentials(id, req.body)
    res.status(200).send({ message: "User updated."})
})

router.put("/user/update/password", async (req: Request, res: Response) => {
    const id: number = await get_id_by_session(req.body.session_id)
    const hashed_password: string = (await get_user_by_id(id)).password
    if(verify_password(req.body.old_password, hashed_password)){
        if(await update_user_password(id, req.body.new_password)) {
            res.status(200).send({ message: "Password updated."})
            return
        }
        res.status(401).send({ message: "Password could not be updated."})
        return
    }
})

router.post("/user/get", async (req: Request, res: Response) => {
    const user: UserType = await get_user_by_session(req.body.session_id)
    delete user.id
    delete user.password
    res.status(200).send({ user: user})
})

export default router

