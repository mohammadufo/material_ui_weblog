import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar alt="Remy Sharp" src="/assets/5.jpg" />
        <Avatar alt="Travis Howard" src="/assets/7.jpg" />
        <Avatar alt="Cindy Baker" src="/assets/8.jpg" />
        <Avatar alt="Agnes Walker" src="/assets/6.jpg" />
        <Avatar alt="Trevor Henderson" src="/assets/9.jpg" />
        <Avatar alt="Trevor Henderson" src="/assets/5.jpg" />
        <Avatar alt="Trevor Henderson" src="/assets/11.jpg" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img
            src="/assets/12.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="/assets/13.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="/assets/7.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="/assets/14.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="/assets/15.png"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="/assets/16.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
    </Container>
  );
};

export default Rightbar;
