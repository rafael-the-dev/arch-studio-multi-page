import { Button, Hidden, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <main>
            <section className={classNames(display.flex, display.flexColumn, classes.px, classes.hero, 
                classes.paramourHero, bg.center, bg.noRepeat, bg.cover, display.justifyCenter)}>
                <Typography component="h1" variant="h3" className={classNames(text.font7, text.textLight)}>
                    Project<br/>paramour
                </Typography>
                <Typography  className={classNames(display.mt1, text.textLight, text.rem9)}>
                    Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
                </Typography>
                <Link to="/portfolio" className={classNames(text.noUnderline, display.mt2)}>
                    <Button 
                        endIcon={<ArrowForwardIcon />}
                        variant="contained"
                        className={classNames(classes.heroButton)}>
                        See our portfolio
                    </Button>
                </Link>
            </section>
        </main>
    )
};

export default Home;