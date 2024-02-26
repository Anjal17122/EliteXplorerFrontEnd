import { Card, ConfigProvider } from "antd";
import LoginForm from "../Login/LoginForm";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";

const LoginPage = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#EAF2FC",
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Card: {
              headerBg: "#005CB3",
              headerFontSize: 20,
              headerFontSizeSM: 20,
              headerHeight: 60,
              headerHeightSM: 60,
            },
          },
        }}
      >
        <Card
          title="Login"
          bordered={false}
          style={{
            width: "30%",
            height: "75vh",
            color: "white",
          }}
        >
          <LoginForm />
          <div style={{ textAlign: "center", color: "black" }}>
            OR
            <br></br>
            <a href={`${AllUrls.urlRegisterPage}`}>Register Now</a>
          </div>
        </Card>
      </ConfigProvider>
    </div>
  );
};
export default LoginPage;
