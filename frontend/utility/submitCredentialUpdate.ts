import axios from "axios";

interface SubmitCredentialUpdateProps {
  url: string;
  email: string;
  phone: string;
  name: string;
  address: string;
}

export const submitCredentialUpdate = ({ url, email, phone, name, address }: SubmitCredentialUpdateProps): null => {
  const sessionId: string | null = localStorage.getItem("sessionId");
  axios
    .put(url + "/user/update/credentials", {
      session_id: sessionId,
      email: email,
      phone: phone,
      name: name,
      address: address,
    })
    .then((response) => {
      alert("Credentials updated.");
    })
    .catch((error) => {
      alert("You are not logged in.");
    });

  return null;
};
