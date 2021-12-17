import { initialState } from "./initialState";
import { GETCOMMENTS, SENDMESSAGE } from "./actions";
import io from "socket.io-client";
const SERVER = "http://localhost:5000";
const CLIENT = "http://localhost:3000";

export const stateReducer = (state = initialState, action) => {
  const socket = io(SERVER, {
    credentials: true,
    extraHeaders: {
      "Access-Control-Allow-Origin": CLIENT,
    },
    query: {
      type: "teste",
    },
  });

  if (action.type === GETCOMMENTS) {
    return {
      ...state,
      comments: action.data,
      socket: socket,
    };
  }
  if (action.type === SENDMESSAGE) {
    return {
      ...state,
      socketComments: action.data.success.comment,
    };
  }
};
