import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import placeholder from "../../images/film-poster-placeholder.png";
import "./movie.css";
import MovieDetails from "./MovieDetails";

class MovieImage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { img, filmTitle, film } = this.props;
    console.log("In movieImage " + JSON.stringify(film));
    return (
      <div>
        <ReactImageFallback
          src={this.props.img}
          fallbackImage={placeholder}
          onClick={this.toggleModal}
          title={this.props.filmTitle}
          className="filcard-image"
        />
        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.toggleModal}>
                &times;
              </span>
              <MovieDetails movieInfo={film} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

MovieImage.propTypes = {
  img: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired,
  filmTitle: PropTypes.string.isRequired,
};

export default MovieImage;
