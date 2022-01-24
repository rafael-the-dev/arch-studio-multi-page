
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { useBackground, useDisplay, useGlobalStyles, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import { Typography } from '@mui/material'

const AboutPage = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const globalStyles = useGlobalStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <main className={classNames(globalStyles.main)}>
            <section className={classNames(display.flex, display.flexColumn, responsive.mdRow,
                responsive.mdAlignEnd, display.relative, globalStyles.hero)}>
                <div className={classNames(bg.center, bg.cover, bg.noRepeat, globalStyles.heroImageContainer,
                    classes.hero)}></div>
                <div className={classNames(display.pb2, display.pt2, globalStyles.px, globalStyles.heroContent,
                    classes.heroContent)}>
                    <Typography component="h1" variant="h4" className={classNames(text.font7, 
                        globalStyles.heroContentTitle)}>
                        Your team of<br/>professionals
                    </Typography>
                    <Typography className={classNames(display.mt1, text.rem9, globalStyles.heroContentDescription)}>
                        Our small team of world-class professionals will work with you every 
                        step of the way. Strong relationships are at the core of everything we do. 
                        This extends to the relationship our projects have with their surroundings.
                    </Typography>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;