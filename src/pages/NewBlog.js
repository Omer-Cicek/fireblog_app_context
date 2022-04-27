import React from 'react';
import { styled } from '@mui/material';
import { TextField, Box } from '@mui/material';

const NewBlogStyledBox = styled(Box)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #555;
  }
  img {
    width: 20%;
    margin-top: 50px;
  }
  .MuiFormControl-root {
    width: 500px;
  }
`;

const NewBlog = () => {
  return (
    <NewBlogStyledBox>
      <img
        src="https://webnedio.com/wp-content/uploads/2022/02/blooog.jpg"
        alt="blogImg"
      />
      <h1>New Blog</h1>
      <TextField
        margin="normal"
        required
        type="search"
        id="title"
        label="Title"
        name="text"
      />
      <TextField
        margin="normal"
        type="search"
        required
        id="imgUrl"
        label="Image URL"
        name="text"
      />
      <TextField
        margin="normal"
        required
        type="text"
        id="content"
        label="Content"
        name="text"
        rows={4}
        multiline
      />
    </NewBlogStyledBox>
  );
};

export default NewBlog;
