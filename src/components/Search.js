import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I RUN WITH EVERY RENDER");

  useEffect(() => {
    console.log("I RUN WITH EVERY RENDER AND INITIAL RENDER");
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Search term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
