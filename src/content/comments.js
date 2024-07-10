import React, { useState } from "react";

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [
        ...comments,
        { id: comments.length + 1, text: newComment },
      ];
      setComments(updatedComments);
      setNewComment("");
    }
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Список комментариев:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => handleDeleteComment(comment.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Добавить комментарий</button>
      </div>
    </div>
  );
};

export default CommentsList;
