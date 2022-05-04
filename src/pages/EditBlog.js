import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

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
  button {
    width: 500px;
    height: 50px;
    margin: 20px;
  }
`;

const EditBlog = () => {
  return (
    <div>
      <NewBlogStyledBox>
        <img
          src="https://media.istockphoto.com/vectors/update-system-icon-concept-of-upgrade-application-progress-icon-for-vector-id1188633596?b=1&k=20&m=1188633596&s=612x612&w=0&h=Vl3aIgNrhy37OJEa40AKcvgQJhYCaL7ck3vzWUTa068="
          alt="blog"
        />
        <h1>Edit Blog</h1>

        <TextField
          margin="normal"
          required
          type="search"
          id="title"
          label="Title"
          name="title"
        />
        <TextField
          margin="normal"
          type="search"
          required
          id="imgUrl"
          label="Image URL"
          name="imageURL"
        />
        <TextField
          margin="normal"
          required
          type="text"
          id="content"
          label="Content"
          name="content"
          rows={4}
          multiline
        />
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </NewBlogStyledBox>
    </div>
  );
};

export default EditBlog;
