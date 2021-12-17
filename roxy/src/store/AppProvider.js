import React from "react";
import { useReducer } from "reinspect";
import { sendMessage, getComments } from "./actionCreators";
import apiFunctions from "../api/api";

const Store = React.createContext();
export const useStore = () => React.useContext(Store);

export const AppProvider = ({ children, initialState, stateReducer }) => {
  const [state, dispatch] = useReducer(
    stateReducer,
    initialState,
    (state) => state,
    "auth"
  );

  const comment = (comment) => {
    apiFunctions.sendComment(comment, callback);
  };

  const callback = (data) => {
    dispatch(sendMessage(data));
  };

  const getListOfComments = () => {
    apiFunctions.getListComments(cbList);
  };

  const cbList = (data) => {
    dispatch(getComments(data));
  };
  return (
    <Store.Provider
      value={{
        state,
        comment,
        getListOfComments,
        dispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
};
