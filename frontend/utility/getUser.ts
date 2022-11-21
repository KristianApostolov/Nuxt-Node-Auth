import axios, { AxiosResponse } from "axios";
import { apiUrl } from "~~/config";

const getUser = async (sessionId: string) => {
  const user: object = await axios
    .post(`${apiUrl}/user/get`, {
      session_id: sessionId,
    })
    .then((response: AxiosResponse) => {
      return response.data.user;
    });

  return user;
};

export default getUser;
