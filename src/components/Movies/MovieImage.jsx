import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import placeholder from "../../images/film-poster-placeholder.png";
import "./movie.css";
import MovieDetails from "./MovieDetails";
import DeleteConfirmationDialog from "./DeletMovie/DeleteConfirmationDialog";
import "./SuccessMessage/successMessage.css";

class MovieImage extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  state = {
    showModal: false,
    showOptions: false,
    showConfirmationDialog: false,
    showSuccessMessage: false,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal }, () => {
      if (this.state.showModal) {
        document.addEventListener("keydown", this.handleKeyPress);
      } else {
        document.removeEventListener("keydown", this.handleKeyPress);
      }
    });
  };

  handleKeyPress = (event) => {
    if (event.keyCode === 27) {
      this.setState({ showModal: false });
    }
  };

  handleEdit = () => {
    console.log("Edit action triggered");
  };

  handleDelete = () => {
    this.setState({ showConfirmationDialog: false });
  };

  handleCloseConfirmationDialog = () => {
    this.setState({ showConfirmationDialog: false });
  };

  handleDelete = () => {
    this.setState({ showConfirmationDialog: true });
  };

  toggleOptions = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };

  handleConfirmDelete = (confirm) => {
    this.setState({ showConfirmationDialog: false });
    this.setState({ showSuccessMessage: true });
    setTimeout(() => {
      this.setState({ showSuccessMessage: false });
    }, 2000);
  };

  render() {
    const { img, filmTitle, film } = this.props;
    return (
      <div>
        <ReactImageFallback
          src={this.props.img}
          fallbackImage={placeholder}
          onClick={this.toggleModal}
          title={this.props.filmTitle}
          className="filcard-image"
        />
        <div className="dropdown" onClick={this.toggleOptions}>
          <div className="three-dots" />
          {this.state.showOptions && (
            <div className="dropdown-content">
              <button onClick={this.handleEdit}>Edit</button>
              <button onClick={this.handleDelete}>Delete</button>
            </div>
          )}
        </div>
        {this.state.showConfirmationDialog && (
          <DeleteConfirmationDialog
            show={this.state.showConfirmationDialog}
            onClose={this.handleCloseConfirmationDialog}
            onConfirm={this.handleConfirmDelete}
            title={filmTitle}
          />
        )}
        {this.state.showSuccessMessage && (
          <div className="success-overlay">
            <div className="success-dialog">Movie Deleted successfully!</div>
          </div>
        )}
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
