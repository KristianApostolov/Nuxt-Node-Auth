import axios from "axios";

interface SubmitPasswordUpdate {
  url: string;
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

export const submitPasswordUpdate = ({
  url,
  oldPassword,
  newPassword,
  repeatNewPassword,
}: SubmitPasswordUpdate): null => {
  if (newPassword !== repeatNewPassword) {
    alert("New passwords do not match.");
    return null;
  }

  const sessionId: string | null = localStorage.getItem("sessionId");
  axios
    .put(url + "/user/update/password", {
      session_id: sessionId,
      old_password: oldPassword,
      new_password: newPassword,
    })
    .then((response) => {
      alert("Password updated.");
    })
    .catch((error) => {
      alert("Wrong password.");
    });

  return null;
};
