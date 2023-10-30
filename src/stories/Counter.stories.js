import React from "react";
import Counter from "../components/Counter/counter";

export default {
  title: "Counter",
  component: Counter,
};

export const Increment = () => <Counter initialValue={0} />;
export const Decrement = () => <Counter initialValue={10} />;
