import { compareSync, hash } from "bcrypt"

export function verify_password(password: string, hash: string): boolean {
    return compareSync(password, hash)
}

export async function hash_password(password: string): Promise<string> {
    return hash(password, 10)
}
