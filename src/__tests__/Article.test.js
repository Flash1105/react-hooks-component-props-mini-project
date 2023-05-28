import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test("renders a <article> element", () => {
  const { container } = render(
    
  );
  
});

test("renders a <h3> with the title of the post", () => {
  render(
    
  );
  const h3 = screen.queryByText(/Components 101/);
;
});

test("renders a <small> with the date of the post", () => {
  render(
   
  );
  const small = screen.queryByText(/December 15, 2020/);
 
});

test("uses a default value for the date if no date is passed as a prop", () => {
  render(
    
  );
  const small = screen.queryByText(/January 1, 1970/);
 
});

test("renders a <p> with the preview text", () => {
  render(
    
  );
  const p = screen.queryByText(/Setting up the building blocks of your site/);

});
