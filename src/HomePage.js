// import React from "react";
// import { Layout, Menu, Button } from "antd";
// import {
//   FireTwoTone,
//   FundTwoTone,
//   ThunderboltTwoTone,
// } from "@ant-design/icons";
// import { connect } from "react-redux";
// import { getTopRatedMovies } from "./redux/actions";
// //import CustomCard from "./components/CustomCard";

// const { Header, Content, Footer } = Layout;

// const HomePage = (props) => {
//   return (
//     <Layout>
//       <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
//         <div className="logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
//           <Menu.Item key="1">
//             <FireTwoTone /> Trending
//           </Menu.Item>
//           <Menu.Item key="2">
//             <ThunderboltTwoTone /> New
//           </Menu.Item>
//           <Menu.Item key="3">
//             <FundTwoTone /> Top 100
//           </Menu.Item>
//         </Menu>
//       </Header>
//       <Content
//         className="site-layout"
//         style={{ padding: "0 50px", marginTop: 64 }}
//       >
//         <div
//           className="site-layout-background"
//           style={{ padding: 24, minHeight: 380 }}
//         >
//           Content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: "center" }}>
//         MovieDB-DEMO ©2021 Created by Neco Cakici
//         <Button
//           onClick={() => {
//             console.log(props);
//             props.getTopRatedMovies();
//           }}
//         >
//           Test
//         </Button>
//       </Footer>
//     </Layout>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.isLoading,
//     movies: state.movies,
//     genres: state.genres,
//     message: state.message,
//   };
// };

// export default connect(mapStateToProps, { getTopRatedMovies })(HomePage);
