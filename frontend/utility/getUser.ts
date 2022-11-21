import axios, { AxiosResponse } from "axios";

const getUser = async (url: string, sessionId: string) => {
  const user: object = await axios
    .post(`${url}/user/get`, {
      session_id: sessionId,
    })
    .then((response: AxiosResponse) => {
      return response.data.user;
    });

  return user;
};

export default getUser;
