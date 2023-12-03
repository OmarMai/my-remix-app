// Home.js

import React from 'react';
import '~/styles/form.css';  // Directly import the CSS file


function Home() {
  return (
    <div className="container"> {/* Use regular class names */}
      <h2>Remix.js Form</h2>
      <form  className="form">
        <label>
          <span>Name:</span>
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          <span>Email:</span>
          <input type="email" name="email" required />
        </label>
        <br />
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
