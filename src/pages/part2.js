import { Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Part2 = () => {

    const cards = [
        {
            title: 'Talking tech in normal life',
            img: require('../assets/blog.jpg')
        },
        {
            title: 'Talking tech in normal life',
            img: require('../assets/blog2.jpg')
        },
        {
            title: 'Talking tech in normal life',
            img: require('../assets/blog3.jpg')
        }
    ]

    return (
        <div className={styles.part2}>
            <Fade>
                <Typography variant='h1' color={grey[50]} sx={{ fontSize: '4.5rem', margin: '1em 0', fontWeight: '500' }}>
                    My Recent Blogs
                </Typography>
            </Fade>
            <Fade>
                <div className={styles.row}>
                    {cards.map((el) => {
                        return (
                            <Card elevation={10} sx={{ maxWidth: 345, color: grey[700], background: grey[300], marginBottom: '1em' }}>
                                <CardHeader
                                    title={el.title}
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={el.img}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/blog/1"><Button sx={{ color: grey[700] }}>Read more</Button></Link>
                                </CardActions>
                            </Card>
                        )
                    })}
                </div>
            </Fade>
        </div>
    )
}

export default Part2;