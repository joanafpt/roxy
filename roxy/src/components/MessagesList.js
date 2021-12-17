import React, { useEffect, useState } from "react";
import CardMessage from "./CardMessage";
import { useStore } from "../store/AppProvider";

export default function MessagesList() {
  const { state } = useStore();
  const [comments, updateComments] = useState([]);

  useEffect(() => {
    const handleComment = (newComment) =>
      updateComments([newComment, ...comments]);
    pushTheDiv();
    if (state.socket !== undefined) {
      state.socket.on("comment", handleComment);
      return () => state.socket.off("comment", handleComment);
    }
  }, [comments, state.socket]);

  const pushTheDiv = () => {
    document.getElementById("message-placeholder") &&
      document
        .getElementById("message-placeholder")
        .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="message-placeholder" style={{ width: 0, height: 0 }}></div>
      {comments.map((item, i) => {
        return (
          <CardMessage
            key={i}
            name={item.name}
            message={item.msg}
            date={item.date}
          />
        );
      })}

      {state !== undefined ? (
        state.comments
          .slice(0)
          .reverse()
          .map((item, i) => {
            return (
              <CardMessage
                key={i}
                name={item.comment.name}
                message={item.comment.msg}
                date={item.comment.date}
              />
            );
          })
      ) : (
        <> Loading...</>
      )}
    </div>
  );
}
