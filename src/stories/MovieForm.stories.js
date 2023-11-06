import React from "react";
import MovieForm from "../components/Movies/MovieForm";

export default {
  title: "MovieForm",
  component: MovieForm,
};

const Template = (args) => <MovieForm {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  initialMovieInfo: {
    name: "Inception",
    year: "2010",
    movieUrl: "https://www.example.com",
    vote_average: "9.3",
    genres: "Action, Sci-Fi, Thriller",
    runtime: "148 min",
    overview: "A dream within a dream.",
  },
  onSubmit: () => console.log("Form Submitted"),
  onClose: () => console.log("Close Form"),
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  initialMovieInfo: {},
  onSubmit: () => console.log("Form Submitted"),
  onClose: () => console.log("Close Form"),
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  initialMovieInfo: {},
  onSubmit: () => console.log("Form Submitted"),
  onClose: () => console.log("Close Form"),
};
