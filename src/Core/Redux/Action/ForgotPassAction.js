import { message } from "antd";
import axios from "axios";

export const Forgot_Pass = (data) => async (dispatch) => {
  await axios
    .post(`/forgot-password?email=${data.email}`)
    .then((res) => {
      console.log(res);
      if (res.data.status === true) {
        localStorage.setItem("forgot", JSON.stringify(res.data.status));
        localStorage.setItem("authorized", JSON.stringify(res.data.status));
        if (JSON.parse(localStorage.getItem("forgot")) === true) {

          message.success(res.data.message);
          setTimeout(() => {
            window.location.assign("/verify_otp");
          }, 1000);
        }
      }
    })
    .catch((err) => {
      localStorage.setItem("forgot", JSON.stringify(err.message));
      message.error(err.message);

    });
};
