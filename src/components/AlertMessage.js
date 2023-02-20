import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertMessage = (props) => {
  //   const { variant, message } = props;
  return (
    <div>
      <Alert key={props.variant} variant={props.variant}>
        {props.message}
      </Alert>
    </div>
  );
};

export default AlertMessage;
