import { useReducer } from "react";
import AlertContext from "./alertContext";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import alertReducer from "./alertReducer";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, color) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, color },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {" "}
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
