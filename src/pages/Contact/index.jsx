import classNames from 'classnames';
import { useBackground, useDisplay, useGlobalStyles, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import { Hidden, Typography } from '@mui/material'

const Contact = () => {
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
                        Tell us about<br/>your project
                    </Typography>
                    <Typography className={classNames(display.mt1, text.rem9, globalStyles.heroContentDescription)}>
                        We’d love to hear more about your project. Please, leave a message below or 
                        give us a call. We have two offices, one in Texas and one in Tennessee. 
                        If you find yourself nearby, come say hello!
                    </Typography>
                </div>
            </section>
        </main>
    );
};

export default Contact;