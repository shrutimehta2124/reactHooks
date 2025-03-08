import React, { useState } from "react";

function Example2() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", liked: false },

  ]);

  const [optimisticState, setOptimisticState] = useState([]);

  const updateLikeStatus = (id) => {
    // Find the post to update
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex === -1) return;

    const updatedPosts = [...posts];
    const postToUpdate = updatedPosts[postIndex];

    // Optimistically update the UI
    const newPosts = updatedPosts.map((post) =>
      post.id === id
        ? { ...post, liked: !post.liked }
        : post
    );

    // Save the optimistic state (to rollback if needed)
    setOptimisticState((prev) => [...prev, { id, oldState: postToUpdate }]);

    // Optimistically update UI
    setPosts(newPosts);

    // Simulate network delay (you can add a setTimeout here for a mock API request)
    setTimeout(() => {
      // If you encounter an error or need to roll back:
      // For now, we'll simulate a success and no rollback.
      
      // Success, do nothing (no rollback in this example)
      console.log("Like status updated!");
    }, 500);
  };

  const undoLikeChange = (id) => {
    const optimisticChange = optimisticState.find((state) => state.id === id);
    if (optimisticChange) {
      const { oldState } = optimisticChange;

      // Rollback the UI to the previous state if something goes wrong
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id ? { ...post, liked: oldState.liked } : post
        )
      );

      // Remove the optimistic state
      setOptimisticState((prevState) =>
        prevState.filter((state) => state.id !== id)
      );
    }
  };

  return (
    <div>
      <h2>Post Likes</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <button
              onClick={() => updateLikeStatus(post.id)}
              style={{
                backgroundColor: post.liked ? "green" : "gray",
                color: "white",
              }}
            >
              {post.liked ? "Unlike" : "Like"}
            </button>
          </li>
        ))}
      </ul>
      {/* Uncomment to test the rollback feature */}
      {/* <button onClick={() => undoLikeChange(1)}>Undo Like Change</button> */}
    </div>
  );
}

export default Example2;
