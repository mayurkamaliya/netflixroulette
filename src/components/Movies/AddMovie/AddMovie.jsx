import React, { Component } from "react";
import Dialog from "../Dialog/Dialog";
import MovieForm from "../MovieForm/MovieForm";
import "../SuccessMessage/successMessage.css";
import "./addMovie.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const AddMovie = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const openFormDialog = () => {
    setIsFormOpen(true);
    navigate('/new');
  };

  const closeFormDialog = () => {
    navigate('/');
    setIsFormOpen(false);
  };

  const addMovie = async () => {
    const response = await axios.post();
  } 

  const handleFormSubmit = (formData) => {
    console.log('form data ' + JSON.stringify(formData));
    setShowSuccessMessage(true);
    closeFormDialog();
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

    return (
      <div className="movie-container">
        <button className="add-movie-button" onClick={openFormDialog}>
          Add Movie
        </button>
        {isFormOpen && (
          <Dialog title="Add Movie" onClose={closeFormDialog}>
            <MovieForm
              onSubmit={handleFormSubmit}
              onClose={closeFormDialog}
              formType="Add movie"
            />
          </Dialog>
        )}
        {showSuccessMessage && (
          <div className="success-overlay">
            <div className="success-dialog">Movie added successfully!</div>
          </div>
        )}
      </div>
    );
}
export default AddMovie;