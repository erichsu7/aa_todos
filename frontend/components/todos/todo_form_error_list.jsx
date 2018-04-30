import React from "react";

const TodoFormErrorList = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    )
  } else {
    return null;
  }
}

export default TodoFormErrorList;
