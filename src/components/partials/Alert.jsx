import React from "react";

export const Alert = (props) => {
  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.mail}!</strong>Your Are REgistered bro
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};
