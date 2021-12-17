import { SENDMESSAGE, GETCOMMENTS, MESSAGE_PAGE_LOADED } from "./actions";

export const sendMessage = (data) => ({
  type: SENDMESSAGE,
  data,
});

export const getComments = (data) => ({
  type: GETCOMMENTS,
  data,
});

export const pageMsgsLoaded = (data) => ({
  type: MESSAGE_PAGE_LOADED,
  data,
});
