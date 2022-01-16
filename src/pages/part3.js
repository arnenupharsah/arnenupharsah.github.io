import styles from './home.module.css';
import { grey } from '@mui/material/colors';
import { Grid, Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';

const Part3 = () => {
    return (
        <Fade>
            <div className={styles.part3}>
                <Fade>
                    <Typography variant='h1' color={grey[700]} sx={{ fontSize: '4.5rem', margin: '1em 0', fontWeight: '500' }}>
                        Upcoming Events
                    </Typography>
                </Fade>
                <Grid container justifyContent='center'>
                    <Grid item xs={12} md={8}>
                        <Fade>
                            <div className={styles.upcoming}>
                                <div className={styles.date} style={{ backgroundColor: grey[700] }}>
                                    <Typography variant="h5" sx={{ color: grey[50] }}>
                                        Feb 20
                                    </Typography>
                                </div>
                                <div className={styles.eventText} style={{ backgroundColor: grey[500] }}>
                                    <Typography variant="h5" sx={{ color: grey[50] }}>
                                        Good morning India
                                    </Typography>
                                </div>
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Fade>
                            <div className={styles.upcoming}>
                                <div className={styles.date} style={{ backgroundColor: grey[700] }}>
                                    <Typography variant="h5" sx={{ color: grey[50] }}>
                                        Feb 21
                                    </Typography>
                                </div>
                                <div className={styles.eventText} style={{ backgroundColor: grey[500] }}>
                                    <Typography variant="h5" sx={{ color: grey[50] }}>
                                        Good morning America
                                    </Typography>
                                </div>
                            </div>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Fade>
                            <div className={styles.upcoming}>
                                <div className={styles.date} style={{ backgroundColor: grey[700] }}>
                                    <Typography variant="h5" sx={{ color: grey[50] }}>
                                        Feb 22
                                    </Typography>
                                </div>
                                <div className={styles.eventText} style={{ backgroundColor: grey[500] }}>
                                    <Typography variant="h5" sx={{ color: grey[50] }}>
                                        Good morning England
                                    </Typography>
                                </div>
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </div>
        </Fade>
    )
}

export default Part3;