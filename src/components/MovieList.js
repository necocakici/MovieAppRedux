import React,{useEffect} from "react";

import { Row, Col, Space, Spin } from "antd";
import { connect } from "react-redux";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../redux/actions/index";
import CustomCard from "./CustomCard";

import { Link } from "react-router-dom";

function MovieList(props) {
  const { type } = props;

  useEffect(() => {
    if (props.type === "popular") {
      props.getPopularMovies();
    } else if (props.type === "topRated") {
      props.getTopRatedMovies();
    } else if (props.type === "upcoming") {
      props.getUpcomingMovies();
    }
  }, [type]);

  return (
    <div>
      {props.isLoading ? (
        <Col
          type="flex"
          align="middle"
          justify="center"
          style={{ marginTop: "20%" }}
        >
          <Space>
            <Spin size="large" />
          </Space>
        </Col>
      ) : (
        <Row
          justify="center"
          align="middle"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          {props.movies.map((movie, index) => (
            <Col
              key={index}
              style={{ marginTop: "2%" }}
              className="gutter-row"
              span={{ xs: 8, sm: 8, md: 8, lg: 32 }}
            >
              <Link to={`/movie/${movie.id}`}>
                <CustomCard
                  title={movie.title}
                  image={movie.poster_path}
                  description={movie.overview.substr(0, 50) + "..."}
                />
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    movies: state.movies,
    message: state.message,
  };
};

export default connect(mapStateToProps, {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
})(MovieList);
