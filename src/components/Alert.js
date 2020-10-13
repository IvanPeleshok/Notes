import React from "react";
import { connect } from "react-redux";
import { alertHide } from "../actions";

const Alert = ({ text, alertHide, visible }) => {
  if (!text || !visible) {
    return null;
  }
  return (
    <div
      className='alert alert-success alert-dismissible'
      role="alert"
    >
      <strong>Заметка: </strong> {text}
      <button
        onClick={() => alertHide()}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">
          &times;
        </span>
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
