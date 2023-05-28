import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import logo from "../assets/logo"

test("renders a <aside> element", () => {
 
});

test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
  
  const img = screen.queryByAltText("blog logo");

});

test("uses a default value for the image if no image is passed as a prop", () => {
 
  const img = screen.queryByAltText("blog logo");
 
});

test("renders a <p> with the about text", () => {

  const p = screen.queryByText("About this blog");
 
});
