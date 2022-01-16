import React from 'react';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Fade from 'react-reveal/Fade';
import styles from './home.module.css';
import Main from '../layouts/Main';

const Home = () => (
  <Main
    title="Contact"
    description="Contact Aulick Sah via email @ arnenupharsah@gmail.com"
  >
    <div className={styles.hero}>
      <Fade>
        <Typography variant="h3" align="right" color={grey[50]} sx={{ margin: '0 1em 0 0', fontWeight: '500' }}>
          Eat
        </Typography>
        <Typography variant="h3" align="right" color={grey[50]} sx={{ margin: '0 1em 0 0', fontWeight: '500' }}>
          Workout
        </Typography>
        <Typography variant="h3" align="right" color={grey[50]} sx={{ margin: '0 1em 2em 0', fontWeight: '500' }}>
          Repeat
        </Typography>
      </Fade>
      <Fade>
        <Typography variant="h1" color={grey[50]} sx={{ fontSize: '4.5rem', fontWeight: '500' }}>
          Hi, I am Aulick Sah
        </Typography>
      </Fade>
      <Fade>
        <Typography variant="body1" color={grey[50]} sx={{ margin: '1em 0 5rem 1em', fontWeight: '500' }}>
          Software Developer | Freelancer
        </Typography>
      </Fade>
    </div>
  </Main>
);

export default Home;
