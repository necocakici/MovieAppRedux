import React from "react";

import { Menu } from "antd";
import {
  FireOutlined,
  RiseOutlined,
  CalendarOutlined,
  ClusterOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { getGenres } from "../redux/actions/index";

import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const { SubMenu } = Menu;

function NavBar(props) {
  React.useEffect(() => {
    props.getGenres();
  }, []);
  return (
    <div>
      <Menu
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
        defaultSelectedKeys={["1"]}
        //defaultOpenKeys={["sub1"]}
        mode={"horizontal"}
        theme={"dark"}
      >
        <Menu.Item key="1" icon={<FireOutlined />}>
          <Link to="/">Popular</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<RiseOutlined />}>
          <Link to="/toprated">Top Rated</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<CalendarOutlined />}>
          <Link to="/upcoming">Upcoming</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<ClusterOutlined />} title="Genres">
          {props.genres.map((genre) => (
            <Menu.Item onClick={(e) => console.log(e)} key={genre.id}>
              {genre.name}
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key="link" icon={<LinkOutlined />}>
          <a href="" target="_blank" rel="noopener noreferrer">
            About
          </a>
        </Menu.Item>
        <Menu.Item>
          <LoginButton />
        </Menu.Item>
        <Menu.Item>
          <LogoutButton />
        </Menu.Item>
      </Menu>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    genres: state.genres,
    message: state.message,
  };
};

export default connect(mapStateToProps, { getGenres })(NavBar);
