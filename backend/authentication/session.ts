import { randomUUID } from "crypto"

import redis from "../databases/cache"

export async function create_session(user_id: number): Promise<string> {
    const session_id: string = randomUUID()
    await redis.set(session_id, String(user_id))
    return session_id
}

export async function revoke_session(session_id:string) {
    return await redis.del(session_id) === 1
}
