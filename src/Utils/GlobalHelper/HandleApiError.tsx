import axios from "axios";
import { message } from "antd";
import { AllUrls } from "../MyUrls/MyUrls";

export const checkIfError = (error: unknown) => {
  // const navigate = useNavigate();
  if (axios.isAxiosError(error)) {
    if (
      error.response &&
      typeof error.response === "object" &&
      error.response.data &&
      typeof error.response.data === "object" &&
      error.response.data.message &&
      typeof error.response.data.message === "string" &&
      error.response.data.message.trim().length > 0
    ) {
      message.error(error.response.data.message);
      if (error.response.status === 403) {
        const loginMessage = (
          <span>
            Not Authorized! <a href={AllUrls.urlLoginPage}>Login again</a>
          </span>
        );
        message.error(loginMessage);
      }
    } else {
      message.error(error.message);
    }
  } else if (error instanceof Error) {
    message.error(error.message);
  } else {
    message.error("Failed! No error message.");
  }
};
