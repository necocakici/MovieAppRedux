import React from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import { getMovieDetails } from "../redux/actions";

import {Statistic} from 'antd'

const MovieDetail = (props) => {
  const { id } = useParams();
  React.useEffect(() => {
    props.getMovieDetails(id);
  }, [id]);
  return (
    <div>
      {props.details ? (
        <div style={{margin: '%10'}}>
        <h4>{props.details.original_title}</h4>
          <p>{props.details.overview}</p>
          <Statistic title="Popularity" value={props.details.popularity} />
          <img
            width="500px"
            height="1000px"
            alt="example"
            src={`https://image.tmdb.org/t/p/original/${props.details.poster_path}`}
          />
        </div>
      ) : (
        <p>Yok</p>
      )}

      <p>{props.overview}</p>
</div>
  );
};

const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps, { getMovieDetails })(MovieDetail);
