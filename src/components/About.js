import React from 'react';
import { render} from '@testing-library/react';
const About = (props) => {
  const { image, about } = props;

  return (
    <aside>
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

const App = () => {

  return (
    <div>
      <h1>My Blog</h1>
      <About
        image="https://via.placeholder.com/215"
        about="About this blog"
      />
    </div>
  );
}

export default App;
