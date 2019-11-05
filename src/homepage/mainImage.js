import React from 'react';
import bealeImage from './images/bealeImage2.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  image:{
    width: '900px',
    height: '350px',
    backgroundImage: `url(${bealeImage})`,
    // backgroundSize: 'cover',
    // backgroundSize: 'contain',
    backgroundSize: '900px 400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  button: {
    background: 'none',
    width: '280px',
    fontSize: '16pt',
    color: 'white',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderRadius: '6px',
    marginBottom: '20px',
    border: '1px solid white',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      background: 'white',
      color:'black',
      border: '1px solid black'
    }
  },
}));

function MainImage() {
  const styles = useStyles()
  return(
    <div className={styles.image}>
      <a href='#' className={styles.button}>VIEW OUR MENU</a>

    </div>
  )
}

export default MainImage;