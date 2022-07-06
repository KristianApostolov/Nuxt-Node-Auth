import { userRepository } from "../databases/database"
import { User } from "../databases/tables/User"
import { UserType } from "../types"
import { hash_password, verify_password } from "./password_utilities"
import { create_session } from "./session"

export async function create_user(email: string, password: string): Promise<UserType> {
    const user: User = new User()
    user.email = email
    user.password = await hash_password(password)
    await userRepository.save(user)
    return user
}

export async function login_user(email: string, password: string): Promise<boolean | string> {
    const user: UserType = await userRepository.findOneBy({
        email: email
    })
    if(!user) return false
    if(await verify_password(password, user.password)) {
        const session_id: string = await create_session(user.id)
        return session_id
    }
    return false
}
