import React, { useState } from "react";

function Example4() {
  const [comments, setComments] = useState([
    { id: 1, text: "Great post!" },
    { id: 2, text: "Very helpful, thanks!" },
  ]);

  const [newComment, setNewComment] = useState("");
  const [optimisticState, setOptimisticState] = useState([]);

  const postComment = () => {
    const newCommentObj = { id: Date.now(), text: newComment };

    // Optimistically update the UI
    setComments((prevComments) => [...prevComments, newCommentObj]);

    // Save the current comment for possible rollback
    setOptimisticState((prev) => [
      ...prev,
      { id: newCommentObj.id, action: "add", text: newComment },
    ]);

    // Simulate network delay (e.g., server call)
    setTimeout(() => {
      console.log("Comment posted:", newCommentObj);
    }, 500);

    setNewComment("");
  };

  const undoComment = (id) => {
    const optimisticChange = optimisticState.find((state) => state.id === id);
    if (!optimisticChange) return;

    // Rollback the "add comment" action
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );

    // Remove optimistic state
    setOptimisticState((prevState) =>
      prevState.filter((state) => state.id !== id)
    );
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => undoComment(comment.id)}>Undo</button>
          </li>
        ))}
      </ul>

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button onClick={postComment}>Post Comment</button>
    </div>
  );
}

export default Example4;
