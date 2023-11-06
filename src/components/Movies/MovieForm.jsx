import React, { Component } from "react";
import Dialog from "./Dialog";
import "./movie.css";

class MovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: props.initialMovieInfo || {
        title: "",
        releaseDate: "",
        movieUrl: "",
        rating: "",
        genre: "",
        runtime: "",
        overview: "",
      },
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
          title="Add Movie"
          onClose={this.props.onClose}
          portalNode={this.props.portalNode}
        >
          <form className="movie-form" onSubmit={this.handleSubmit}>
            <label>
              Title
              <input
                type="text"
                name="title"
                value={this.state.formData.title}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Movie Url
              <input
                type="text"
                name="movieUrl"
                value={this.state.formData.director}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Genre
              <input
                type="text"
                name="genre"
                value={this.state.formData.director}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Rating
              <input
                type="text"
                name="rating"
                value={this.state.formData.director}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Runtime
              <input
                type="text"
                name="runtime"
                value={this.state.formData.director}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Release Date
              <input
                type="text"
                name="releaseDate"
                value={this.state.formData.director}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Overview
              <input
                className="wider-input"
                type="text"
                name="overview"
                value={this.state.formData.director}
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

export default MovieForm;
