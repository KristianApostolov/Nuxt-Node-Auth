import { randomUUID } from "crypto"
import { compare, compareSync, hash } from "bcrypt"

import db from "../databases/database"
import { User } from "../databases/tables/User"
import { UserType } from "../types"
import redis from "../databases/cache"

async function get_user_by_session(session_id: string) {
    const user_id: string = await redis.get(session_id)
    if(typeof(user_id) !== null) {
        return await get_user_by_id(user_id)
    }
    throw new Error("User not found")
}

async function get_user_by_id(user_id:string): Promise<UserType> {
    
    return await db.manager.findOneBy(User,{
        id: Number(user_id)
    })
}

async function verify_password(password: string, hash: string): Promise<boolean> {
    return compareSync(password, hash)
    
}

async function hash_password(password: string): Promise<string> {
    return await hash(password, 10)
}
