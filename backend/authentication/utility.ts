import { randomUUID } from "crypto"
import { compare, compareSync, hash } from "bcrypt"

import db from "../databases/database"
import { User } from "../databases/tables/User"
import { UserType } from "../types"
import redis from "../databases/cache"

export async function get_id_by_session(session_id: string): Promise<number> {
    const user_id: number = parseInt(await redis.get(session_id))
    if(!user_id) throw new Error("You are not logged in.") 
    return user_id
}

export async function get_user_by_id(user_id: string): Promise<UserType> {
    return await db.findOneBy(User,{
        id: parseInt(user_id)
    })
}

export async function verify_password(password: string, hash: string): Promise<boolean> {
    return compareSync(password, hash)
    
}

export async function hash_password(password: string): Promise<string> {
    return hash(password, 10)
}

export async function create_session(user_id: number): Promise<string> {
    const session_id = randomUUID()
    await redis.set(session_id, String(user_id))
    return session_id
}

export async function revoke_session(session_id:string){
    return await redis.del(session_id) === 1
}

export async function email_is_free(email: string): Promise<boolean> {
    return await db.findOneBy(User, {
        email: email
    }) === null
}