import { useParams } from 'react-router-dom';
import { useFetch } from '../auth/firebase';
import {
  styled,
  Button,
  CardHeader,
  Avatar,
  IconButton,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DetailsStyledBox = styled(Box)`
  // width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10;
`;
const AvatarContainer = styled(Box)`
  display: flex;
  margin-bottom: 14px;
  & > * {
    margin: 4px;
  }
`;

const AvatarLabel = styled(Box)`
  display: flex;
  align-items: center;
`;

const Details = () => {
  const { id } = useParams();
  const { contactList } = useFetch();

  return (
    <DetailsStyledBox>
      <h1>𝕯𝖊𝖙𝖆𝖎𝖑𝖘</h1>
      {contactList?.map(
        (item) =>
          item.id === id && (
            <Card sx={{ maxWidth: '50%' }} key={item.id}>
              <CardHeader
                avatar={
                  <Avatar
                    style={{ marginRight: '14px' }}
                    alt="userPhoto"
                    src={item.photoURL}
                  />
                }
                action={<IconButton aria-label="settings"></IconButton>}
                title={item.title}
                subheader="September 14, 2016"
              />

              <img
                src={item.imageURL}
                alt="BlogPhoto"
                style={{ margin: 10, width: '60%', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
              <AvatarContainer>
                <AvatarLabel>
                  <AccountCircleIcon />
                  <Typography variant="body2"> {item.email}</Typography>
                </AvatarLabel>
              </AvatarContainer>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Button color="secondary" startIcon={<UpdateIcon />}>
                  UPDATE
                </Button>
                <Button color="error" startIcon={<DeleteIcon />}>
                  DELETE
                </Button>
              </CardActions>
            </Card>
          )
      )}
    </DetailsStyledBox>
  );
};

export default Details;
