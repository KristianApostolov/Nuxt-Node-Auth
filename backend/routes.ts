import { Router, Request, Response } from "express"

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    res.send({ message: 'Hello World' })
})

router.post('/user/register', async (req: Request, res: Response) => {

})

export default router