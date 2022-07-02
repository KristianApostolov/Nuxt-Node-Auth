import { Router, Request, Response } from "express"
import {create_session, email_is_free, get_id_by_session, hash_password, revoke_session, verify_password} from "./authentication/utility"
import db from "./databases/database"
import { User } from "./databases/tables/User"


const router = Router()

router.get("/", async (req: Request, res: Response) => {
    res.status(200).send({ message: "Hello World"})
})

router.post("/user/register", async (req: Request, res: Response) => {
    if(!await email_is_free(req.body.email)) {
        res.status(400).send({ message: "Email is already in use"})
        return 
    }
    const user = new User()
    user.email = req.body.email
    user.password = await hash_password(req.body.password)
    await db.save(user)
    res.status(200).send({ message: "User created."})
})
router.post("/user/login", async (req: Request, res: Response) => {
    await db.findOneBy(User, {
        email: req.body.email
    })
    .then(async (user: User) => {
       if(user === null){
        res.status(400).send({ message: "User not found."})
       }
        if(await verify_password(req.body.password, user.password)){
            const session_id = await create_session(user.id)
            res.send({ message: "Login successful", session_id })
        }
        res.status(400).send({ message: "Wrong username or password."})
    })
    .catch((error: any)  =>{
        res.status(400).send({ message: error})
    })    
})

router.post("/user/logout", async (req: Request, res: Response) => {
    await revoke_session(req.body.session_id) 
    res.status(200).send({ message: "Logout successful"})
})

router.put("/user/update", async (req: Request, res: Response) => {
    const id: number = await get_id_by_session(req.body.session_id)
    db.update(User, {
            id: id
        },{
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone
        })
    res.status(200).send({ message: "User updated."})
})

export default router

