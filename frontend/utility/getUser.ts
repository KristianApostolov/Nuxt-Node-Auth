import axios, { AxiosResponse } from "axios";

const getUser = async (sessionId: string, url: string) => {
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
