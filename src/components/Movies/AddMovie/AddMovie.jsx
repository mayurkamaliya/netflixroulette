import React, { Component } from "react";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm/MovieForm";
import "../SuccessMessage/successMessage.css";
import "./addMovie.css";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      showSuccessMessage: false,
    };
  }

  openFormDialog = () => {
    this.setState({ isFormOpen: true });
  };

  closeFormDialog = () => {
    this.setState({ isFormOpen: false });
  };

  handleFormSubmit = (formData) => {
    this.setState({ showSuccessMessage: true });
    this.closeFormDialog();
    setTimeout(() => {
      this.setState({ showSuccessMessage: false });
    }, 2000);
  };

  render() {
    return (
      <div className="movie-container">
        <button className="add-movie-button" onClick={this.openFormDialog}>
          Add Movie
        </button>
        {this.state.isFormOpen && (
          <Dialog title="Add Movie" onClose={this.closeFormDialog}>
            <MovieForm
              onSubmit={this.handleFormSubmit}
              onClose={this.closeFormDialog}
              formType="Add movie"
            />
          </Dialog>
        )}
        {this.state.showSuccessMessage && (
          <div className="success-overlay">
            <div className="success-dialog">Movie added successfully!</div>
          </div>
        )}
      </div>
    );
  }
}

export default AddMovie;
