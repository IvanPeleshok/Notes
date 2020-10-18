import React, { PureComponent } from "react";
import { Form, Notes, Spinner } from "../components";
import { connect } from "react-redux";
import { getNote, deleteNotes, homeDefocused} from "../actions";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getNote();
  }

  componentDidUpdate() {
    
    if (this.props.loading) {
      this.props.getNote();
    }
  }

  componentWillUnmount(){
    this.props.homeDefocused();
  }

  render() {
    if (this.props.loading){
      return <Spinner/>
    }

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
  notes: state.note.notes,
  loading: state.note.loading,
});

const mapDispatchToProps = {
  getNote,
  deleteNotes,
  homeDefocused,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
