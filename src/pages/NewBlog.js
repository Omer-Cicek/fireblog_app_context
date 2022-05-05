import { useContext, useState } from 'react';
import { Button, styled } from '@mui/material';
import { TextField, Box } from '@mui/material';
import { AddUser } from '../auth/firebase';
import { AuthContext } from '../contexts/AuthContext';

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

const NewBlog = () => {
  const initialValues = {
    title: '',
    imageURL: '',
    content: '',
    email: '',
    photoURL: '',
    date: '',
  };

  const [info, setInfo] = useState(initialValues);

  const { currentUser } = useContext(AuthContext);
  const { email, photoURL } = currentUser;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value, email, photoURL, date: Date() });
    console.log(info);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(Date());
    AddUser(info);
    setInfo(initialValues);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <NewBlogStyledBox>
        <img
          src="https://webnedio.com/wp-content/uploads/2022/02/blooog.jpg"
          alt="blog"
        />
        <h1>New Blog</h1>

        <TextField
          margin="normal"
          required
          type="search"
          id="title"
          label="Title"
          name="title"
          onChange={handleChange}
          value={info.title}
        />
        <TextField
          margin="normal"
          type="search"
          required
          id="imgUrl"
          label="Image URL"
          name="imageURL"
          onChange={handleChange}
          value={info.imageURL}
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
          onChange={handleChange}
          value={info.content}
        />
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </NewBlogStyledBox>
    </form>
  );
};

export default NewBlog;
