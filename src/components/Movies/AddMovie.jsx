import React, { Component } from "react";
import Dialog from "./Dialog";
import MovieForm from "./MovieForm";
import "./movie.css";

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
            />
          </Dialog>
        )}
          {this.state.showSuccessMessage && (
          <div className="success-overlay">
            <div className="success-dialog">
              Movie added successfully!
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AddMovie;
