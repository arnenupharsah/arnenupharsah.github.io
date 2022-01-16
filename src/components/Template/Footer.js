import React from 'react';
import { Facebook, GitHub, Instagram } from '@mui/icons-material';
import {
  AppBar, Button, Container, Grid, Toolbar, Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Fade } from 'react-reveal';

const btn = {
  color: grey[200],
};

const Footer = () => (
  <AppBar sx={{ background: grey[500], padding: '1em', color: 'white' }} elevation={0} position="static">
    <Fade>
      <Container maxWidth="false">
        <div style={{ padding: '1em' }}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ paddingLeft: '1em' }}>
              <Typography variant="h6" align="center" gutterBottom>
                About Aulick
              </Typography>
              <Typography align="center" sx={{ color: grey[300] }}>
                During the day, I am Software Engineer. I spend nights sleeping.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2} sx={{ paddingLeft: '1em' }}>
              <Typography variant="h6" align="center" gutterBottom>
                Navigation
              </Typography>
              <a href="/about"> About Us </a>
              <br />
              <a href="/newsletter">Newsletter </a>
            </Grid>
            <Grid item xs={12} md={3} sx={{ paddingLeft: '1em' }}>
              <Typography variant="h6" align="center" gutterBottom>
                Contacts
              </Typography>
              <p>Based in India</p>
              <p>arnenupharsah@gmail.com</p>
              <p>Send me a message</p>
            </Grid>
            <Grid item xs={12} md={3} sx={{ paddingLeft: '2em' }}>
              <iframe title="Newsletter" src="https://aulicksah.substack.com/embed" width="100%" height="320" style={{ color: '#FFF' }} frameBorder="0" scrolling="no" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </Fade>
    <Fade>
      <Toolbar sx={{ justifyContent: 'center' }}>
        {/* <Typography variant="h6">
        Follow me :
    </Typography> */}
        <Button startIcon={<Facebook />} sx={btn}>Facebook</Button>
        <Button startIcon={<Instagram />} sx={btn}>Instagram</Button>
        <Button startIcon={<GitHub />} sx={btn}>Github</Button>
      </Toolbar>
    </Fade>
  </AppBar>
);

export default Footer;
