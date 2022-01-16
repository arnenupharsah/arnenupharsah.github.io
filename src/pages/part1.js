import Fade from 'react-reveal/Fade';
import styles from './home.module.css';
import { grey } from '@mui/material/colors';
import { Grid, Typography } from '@mui/material';

const Part1 = () => {
    return (
        <Fade>
            <div className={styles.part1}>
                <Fade>
                    <Typography variant='h1' color={grey[700]} sx={{ fontSize: '4.5rem', margin: '1em 0', fontWeight: '500' }}>
                        THINKER + DOER
                    </Typography>
                </Fade>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Fade>
                            <Typography variant='body1' color={grey[700]} sx={{ margin: '0.5em 1em', minWidth: '300px' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quae! Corporis, reprehenderit expedita nisi repellendus ut aliquid molestias nam repudiandae labore! Quibusdam, dolore non deserunt recusandae eligendi voluptatum ex dolorem soluta praesentium saepe? Vitae rem at sed rerum fuga deleniti quibusdam autem, tempore consequatur labore saepe eius quam quaerat magni optio ratione, quo maiores delectus nemo officiis odio modi! Harum soluta necessitatibus porro odit quas nobis dolor. Tempore perferendis voluptates vero vitae animi dolores alias modi dolor veniam neque? Facilis nisi, totam officiis dicta iure rerum ullam quis nulla rem? Unde tenetur sapiente molestiae rerum quos modi. Quos, blanditiis ut.
                            </Typography>
                        </Fade>
                        <Fade>
                            <Typography variant='body1' color={grey[700]} sx={{ margin: '1em 1em', minWidth: '300px' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quae! Corporis, reprehenderit expedita nisi repellendus ut aliquid molestias nam repudiandae labore! Quibusdam, dolore non deserunt recusandae eligendi voluptatum ex dolorem soluta praesentium saepe? Vitae rem at sed rerum fuga deleniti quibusdam autem, tempore consequatur labore saepe eius quam quaerat magni optio ratione, quo maiores delectus nemo officiis odio modi! Harum soluta necessitatibus porro odit quas nobis dolor. Tempore perferendis voluptates vero vitae animi dolores alias modi dolor veniam neque? Facilis nisi, totam officiis dicta iure rerum ullam quis nulla rem? Unde tenetur sapiente molestiae rerum quos modi. Quos, blanditiis ut.
                            </Typography>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Fade>
                            <div>
                                <img src={require('../../assets/me.jpg')} alt="me" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </div>
        </Fade>
    )
}

export default Part1;