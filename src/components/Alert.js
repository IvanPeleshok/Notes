import React from "react";
import { connect } from "react-redux";
import { alertHide } from "../actions";

const Alert = ({ text, alertHide, visible }) => {
  if (!text || !visible) {
    return null;
  }
  return (
    <div className="alert alert-success alert-dismissible " role="alert">
      <div className="text__overflow">
        <strong>Заметка: </strong> {text}
      </div>
      <button
        onClick={() => alertHide()}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <p aria-hidden="true">
          &times;
        </p>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.alertText,
    visible: state.visible,
  };
};

const mapDispatchToProps = {
  alertHide,
};
export default connect(mapStateToProps, mapDispatchToProps)(Alert);
