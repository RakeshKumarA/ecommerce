import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import image1 from '../assets/Test1_bg.png';
import image2 from '../assets/Test2_bg.png';
import image3 from '../assets/Test3_bg.png';

const useStyles = makeStyles((theme) => ({
  parent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  child: {
    flex: '0 1 300px',
    padding: '10px',
    textAlign: 'center',
  },
  media: {
    height: '400px',
  },
}));

const MainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.child}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image1}
              title="Samsung"
            />
          </CardActionArea>
        </Card>
      </div>
      <div className={classes.child}>
        <Card>
          <CardActionArea>
            <CardMedia className={classes.media} image={image2} title="LG" />
          </CardActionArea>
        </Card>
      </div>
      <div className={classes.child}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image3}
              title="Iphone"
            />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default MainContent;
