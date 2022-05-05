import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from '@mui/material';
import { styled } from '@mui/styles';
import { useFetch } from '../auth/firebase';
import loading from '../assets/loading.gif';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const { isLoading, contactList } = useFetch();
  console.log(contactList);

  const handleDetails = (item) => {
    navigate('/details/' + item.id, { state: { item } });
    console.log(item);
  };

  return (
    <MyComponent>
      {isLoading && (
        <img src={loading} alt="loading" style={{ width: '30%' }} />
      )}
      {contactList?.map((item, index) => {
        return (
          <Card
            sx={{ width: 360, padding: 0.8 }}
            key={index}
            onClick={() => handleDetails(item)}
          >
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
                onError={(e) => {
                  e.target.src =
                    'http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg';
                }}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  height: '100%',
                  minHeight: '360px',
                }}
              />
              <CardContent>
                <p>{item?.date}</p>
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
          </Card>
        );
      })}
    </MyComponent>
  );
};

export default Main;
