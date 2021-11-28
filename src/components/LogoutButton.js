import React from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Button
        type="primary"
        shape="round"
        icon={<LogoutOutlined />}
        size={"middle"}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </Button>
    </div>
  );
};

export default LoginButton;
