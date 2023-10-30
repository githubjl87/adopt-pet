import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h2", null, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Adopt Me"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "Rabbit",
      name: "Feifei",
      breed: "Loop",
    }),
    React.createElement(Pet, {
      animal: "Fish",
      name: "Genki",
      breed: "Goldfish",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
