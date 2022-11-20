import redis from "../databases/cache";
import { userRepository } from "../databases/database";
import { UserType } from "../types";

export async function get_id_by_session(session_id: string): Promise<number> {
  const user_id: number = parseInt(await redis.get(session_id));
  if (!user_id) throw new Error("You are not logged in.");
  return user_id;
}

export async function get_user_by_id(user_id: number): Promise<UserType> {
  return await userRepository.findOneBy({
    id: user_id,
  });
}

export async function get_user_by_session(session_id: string): Promise<UserType> {
  const user_id: number = await get_id_by_session(session_id);
  return await get_user_by_id(user_id);
}

export async function email_is_in_use(email: string): Promise<boolean> {
  return (await userRepository
    .findOneByOrFail({
      email: email,
    })
    .catch(() => {
      return false;
    })) === false
    ? false
    : true;
}
