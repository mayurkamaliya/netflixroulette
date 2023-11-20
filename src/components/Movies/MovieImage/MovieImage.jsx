import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import placeholder from "../../../images/film-poster-placeholder.png";
import "./movieImage.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import DeleteConfirmationDialog from "../DeleteMovie/DeleteConfirmationDialog";
import "../SuccessMessage/successMessage.css";
import MovieForm from "../MovieForm/MovieForm";
import { useNavigate, useLocation } from 'react-router-dom';


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

  removePathParam = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newPath = '/';
    var newUrl = `${newPath}`;
    window.history.pushState({}, '', newUrl);
  }

  addPathParam = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const newPath = `/${this.props.film.id}`;
    const newUrl = `${newPath}`;
    window.history.pushState({}, '', newUrl);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal }, () => {
      if (this.state.showModal) {
        this.addPathParam();
        document.addEventListener("keydown", this.handleKeyPress);
      } else {
        this.removePathParam();
        document.removeEventListener("keydown", this.handleKeyPress);
      }
    });
  };

  handleKeyPress = (event) => {
    if (event.keyCode === 27) {
      this.setState({ showModal: false });
      this.removePathParam();
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

  handleConfirmDelete = () => {
    this.setState({ showConfirmationDialog: false });
    this.setState({ deleted: true });
    setTimeout(() => {
      this.setState({ deleted: false });
    }, 2000);
  };

  handleEditSubmit = () => {
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

