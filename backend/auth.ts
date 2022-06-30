import { randomUUID } from "crypto"
import { compare, compareSync, hash } from "bcrypt"

import db from "./databases/database"
import { User } from "./databases/tables/User"
import { UserType } from "./types"


async function get_user_by_id(id: number): Promise<UserType> {
    
    return await db.manager.findOneBy(User,{
        id: id
    })
}

async function verify_password(password: string, hash: string): Promise<boolean> {
    return compareSync(password, hash)
    
}

async function hash_password(password: string): Promise<string> {
    return await hash(password, 10)
}