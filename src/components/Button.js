//Button to go on next page
import React from "react";
import { useHistory } from "react-router-dom";

const Button = () => {
  const history = useHistory();

  return (
    <div>
      {/*Button for details page  */}
      <button
        name="next"
        onClick={() => {
          history.push("/details");
        }}
      >
        Next Page
      </button>
    </div>
  );
};

export default Button;
