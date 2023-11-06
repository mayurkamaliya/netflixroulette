import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MovieForm from "../components/Movies/MovieForm";

describe("MovieForm Component", () => {
  let onSubmitMock, onCloseMock, onResetMock;

  beforeEach(() => {
    onSubmitMock = jest.fn();
    onCloseMock = jest.fn();
    onResetMock = jest.fn();
  });

  it("submits the form correctly", () => {
    const { getByLabelText, getByText } = render(
      <MovieForm onSubmit={onSubmitMock} onResetMock={onResetMock} />
    );

    const titleInput = getByLabelText("Title");
    const submitButton = getByText("Submit");

    fireEvent.change(titleInput, { target: { value: "New Movie Title" } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith(
      expect.objectContaining({ name: "New Movie Title" })
    );
  });

  it("resets the form correctly", () => {
    const { getByLabelText, getByText } = render(
      <MovieForm onSubmit={onSubmitMock} onResetMock={onResetMock} />
    );

    const titleInput = getByLabelText("Title");
    const resetButton = getByText("Reset");

    fireEvent.change(titleInput, { target: { value: "New Movie Title" } });
    fireEvent.click(resetButton);

    expect(titleInput.value).toBe("");
  });
});

