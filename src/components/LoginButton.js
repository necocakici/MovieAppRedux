import React from "react";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button
        type="primary"
        shape="round"
        icon={<LoginOutlined />}
        size={"middle"}
        onClick={() => loginWithRedirect()}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
