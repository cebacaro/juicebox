import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";

import { deletePost } from "../api-adapter";

function IndividualPost(props) {
  const post = props.post;
  const token = props.token;

  async function deleteOnClick(evt) {
    const deletedPost = await deletePost(token, post.id);
  }

  return (
    <div className="individualPost">
      <div className="post-content">
        <h1>{post.title}</h1>
        <p className="content">{post.content}</p>
        <p className="author">
          <strong>{post.author.name}</strong>
        </p>
      </div>
      <div className="postButtonContainer">
        <Tooltip title="Does not add if it already exists.">
          <Button className="edit-button">
            Edit
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={deleteOnClick} size="small">
            <DeleteIcon  />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

export default IndividualPost;
