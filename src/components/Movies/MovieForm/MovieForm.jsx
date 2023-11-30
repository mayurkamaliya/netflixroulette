import React, { Component } from "react";
import Dialog from "../Dialog/Dialog";
import "./movieForm.css";

class MovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: props.initialMovieInfo || { ...MovieForm.defaultProps.initialMovieInfo },
      formType: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.formData);
    }
  };

  render() {
    return (
      <div>
        <Dialog
          title="Add/Edit Movie"
          onClose={this.props.onClose}
          portalNode={this.props.portalNode}
        >
          <form className="movie-form" onSubmit={this.handleSubmit}>
            <label>
              Title
              <input
                type="text"
                name="name"
                value={this.state.formData.name}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Movie Url
              <input
                type="text"
                name="movieUrl"
                value={this.state.formData.pictureURL}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Genre
              <input
                type="text"
                name="genres"
                value={this.state.formData.genres}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Rating
              <input
                type="text"
                name="vote_average"
                value={this.state.formData.vote_average}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Runtime
              <input
                type="text"
                name="runtime"
                value={this.state.formData.runtime}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Release Date
              <input
                type="text"
                name="year"
                value={this.state.formData.year}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Overview
              <input
                className="wider-input"
                type="text"
                name="overview"
                value={this.state.formData.overview}
                onChange={this.handleInputChange}
              />
            </label>
            <button className="form-button" type="reset">
              Reset
            </button>
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </Dialog>
      </div>
    );
  }
}

MovieForm.defaultProps = {
  initialMovieInfo: {
    name: "",
    year: "",
    movieUrl: "",
    vote_average: "",
    genres: "",
    runtime: "",
    overview: "",
  },
}

export default MovieForm;

