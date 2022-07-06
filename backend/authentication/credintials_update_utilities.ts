import { userRepository } from "../databases/database"
import { UserType } from "../types"
import { hash_password } from "./password_utilities"

export async function update_user_password(id: number, password: string): Promise<boolean> {
    const new_password: string = await hash_password(password)
    await userRepository.update({
        id: id
    },{
        password: new_password
    })
    .catch( () => {
        return false
    })
    return true
}
export async function update_user_credentials(id: number, data: UserType): Promise<boolean> {
    const userIsUpdated = await userRepository.update({
        id: id 
    },{
        email: data.email,
        name: data.name,
        address: data.address,
        phone: data.phone
    })
    .then( () => {
        return true
    })
    .catch( () => {
        return false
    })
    return userIsUpdated
}