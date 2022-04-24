import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';

const Main = () => {
  const MyComponent = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    margin: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  });

  return (
    <MyComponent>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
        return (
          <Card sx={{ maxWidth: 300 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="http://www.opendart.com/uploads/opendart.com_reactdersleri_react.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
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
