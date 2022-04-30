import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { styled } from '@mui/styles';
import { useFetch } from '../auth/firebase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const Main = () => {
  const MyComponent = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    margin: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'left',
  });
  const MyUseremail = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  });

  const { isLoading, contactList } = useFetch();
  console.log(contactList);

  return (
    <MyComponent>
      {contactList?.map((item, index) => {
        return (
          <Card sx={{ width: 300, padding: 0.8 }} key={index}>
            <MyUseremail>
              <img
                src={item.photoURL}
                alt="photoUser"
                style={{
                  width: 40,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
              <p>{item.email}</p>
            </MyUseremail>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={item.imageURL}
                alt="userImg"
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ backgroundColor: '#F8ECD1' }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <FavoriteBorderIcon />
              <ChatBubbleOutlineIcon />
            </CardActions>
          </Card>
        );
      })}
    </MyComponent>
  );
};

export default Main;
