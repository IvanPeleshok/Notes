import React from "react";
import { connect } from "react-redux";
import { alertShow, alertRecord, alertHide, alertSubmit, postNote } from "../actions";

const Form = ({ text, alertShow, alertRecord, alertHide, alertSubmit, postNote }) => {
  return (  
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text) {
          postNote(text.trim());
          alertSubmit();
          alertShow();
        }
      }}
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Текст заметки"
          onChange={(e) => {
            if (e.target.value === "") {
              alertHide();
            }
            e.preventDefault();
            alertRecord(e.target.value);
          }}
          value={text}
        />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

const mapDispatchToProps = {
  alertShow,
  alertRecord,
  alertHide,
  alertSubmit,
  postNote,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
