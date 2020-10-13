import React, { Component } from "react";
import { Form, Notes } from "../components";
import { connect } from "react-redux";
import { getNote, deleteNotes } from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.getNote();
  }

  componentDidUpdate() {
    if (this.props.loading)
    {
      this.props.getNote();
    }
  }

  render() {
    const { notes, deleteNotes } = this.props;
    return (
      <>
        <Form />
        <hr />
        <Notes notes={notes} deleteNotes={deleteNotes} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes,
  loading: state.loading,
});

const mapDispatchToProps = {
  getNote,
  deleteNotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
