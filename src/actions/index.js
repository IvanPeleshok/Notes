import axios from "axios";

const alertRecord = (text) => {
  return {
    type: "ALERT_RECORD",
    payload: text,
  };
};

const alertShow = () => {
  return {
    type: "ALERT_SHOW",
  };
};

const alertHide = () => {
  return {
    type: "ALERT_HIDE",
  };
};

const alertSubmit = () => {
  return {
    type: "ALERT_SUBMIT",
  };
};

const url = "https://react-todo-98b1c.firebaseio.com";

const postNote = (text) => async (dispatch) => {
  const data = {
    title: text,
    date: new Date().toString(),
  };
  const res = await axios.post(`${url}/notes.json`, data);

  dispatch({
    type: "POST_NOTE",
    payload: data,
  });
};

const getNote = () => async (dispatch) => {
  const res = await axios.get(`${url}/notes.json`);
  if (!res.data) {
    dispatch({
      type: "GET_NOTE",
      payload: [],
    });
  } else {
    const data = Object.keys(res.data).map((key) => ({
      ...res.data[key],
      id: key,
    }));
    dispatch({
      type: "GET_NOTE",
      payload: data,
    });
  }
};

const deleteNotes = (id) => async (dispatch) => {
  await axios.delete(`${url}/notes/${id}.json`);
  dispatch({
    type: "DELETE_NOTE",
    payload: id,
  });
};

export {
  alertRecord,
  alertShow,
  alertHide,
  alertSubmit,
  postNote,
  getNote,
  deleteNotes,
};
