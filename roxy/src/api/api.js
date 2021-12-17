const SERVER = "http://localhost:5000";
const CLIENT = "http://localhost:3000";
const SEND_MESSAGE = SERVER + "/comment";
const LIST_MESSAGES = SERVER + "/commentslist";

export const sendComment = (comment, callbackComment) => {
  const myComment = { comment: comment };
  fetch(SEND_MESSAGE, {
    method: "POST",
    body: JSON.stringify(myComment),
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": CLIENT,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      callbackComment(data);
    });
};

export const getListComments = (cbList) => {
  fetch(LIST_MESSAGES, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": CLIENT,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      cbList(data);
    });
};

const apiFunctions = {
  sendComment: sendComment,
  getListComments: getListComments,
};

export default apiFunctions;
