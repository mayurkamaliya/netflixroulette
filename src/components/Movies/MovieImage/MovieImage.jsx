import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import placeholder from "../../../images/film-poster-placeholder.png";
import "./movieImage.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import DeleteConfirmationDialog from "../DeleteMovie/DeleteConfirmationDialog";
import "../SuccessMessage/successMessage.css";
import MovieForm from "../MovieForm/MovieForm";

class MovieImage extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  state = {
    showModal: false,
    showOptions: false,
    showConfirmationDialog: false,
    delted: false,
    edited: false,
    showEditDialog: false,
  };

  closeEditDialog = () => {
    this.setState({ showEditDialog: false });
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
    this.setState({ showEditDialog: true });
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
    this.setState({ deleted: true });
    setTimeout(() => {
      this.setState({ deleted: false });
    }, 2000);
  };

  handleEditSubmit = (formData) => {
    this.setState({ edited: true });
    this.setState({ showEditDialog: false });
    setTimeout(() => {
      this.setState({ edited: false });
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
        {this.state.showEditDialog && (
          <MovieForm
            initialMovieInfo={this.props.film}
            onClose={this.closeEditDialog}
            onSubmit={this.handleEditSubmit}
          />
        )}

        {this.state.deleted && (
          <div className="success-overlay">
            <div className="success-dialog">Movie Deleted successfully!</div>
          </div>
        )}
        {this.state.edited && (
          <div className="success-overlay">
            <div className="success-dialog">Movie Edited successfully!</div>
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

