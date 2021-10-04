import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const data = [
  {
    id: 1,
    title: "Parkour Is The Best Sport!",
    img: "/assets/2.jpg",
  },
  {
    id: 2,
    title: "Haj Ghasem Soleymany / Iranian Legend",
    img: "/assets/17.jpg",
  },
  {
    id: 3,
    title: "Khabib Nurmagomedov / The Eagle Of MMA!",
    img: "/assets/11.jpg",
  },
  {
    id: 4,
    title: "HEZBOLLAH SPECIAL FORCE",
    img: "/assets/1.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {data.map((d) => (
        <Post img={d.img} title={d.title} />
      ))}
    </Container>
  );
};

export default Feed;
