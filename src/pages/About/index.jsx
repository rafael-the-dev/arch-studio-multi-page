
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { useBackground, useDisplay, useGlobalStyles, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import { Hidden, Typography } from '@mui/material'
import ProfileCard from './Card';

import avatarJake from '../../assets/images/about/desktop/avatar-jake.jpg'
import avatarThompson from '../../assets/images/about/desktop/avatar-thompson.jpg'
import avatarJackson from '../../assets/images/about/desktop/avatar-jackson.jpg'
import avatarMaria from '../../assets/images/about/desktop/avatar-maria.jpg'

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
            <section className={classNames(globalStyles.px, display.pb3, display.pt33, display.mt2, display.alignCenter,
                globalStyles.welcomeSection, display.justifyEnd, display.relative, responsive.mdMt3,
                responsive.mdJustifyBetween, responsive.mdPl0)}>
                <div className={classNames(globalStyles.welcomeContent, responsive.mdMr3)}>
                    <Typography component="h2" variant="h4" className={classNames(globalStyles.introTitleBar, text.font7)}>
                        Welcome to<br />Arch Studio
                    </Typography>
                    <Typography className={classNames(globalStyles.introDescription, display.mt2, text.rem9)}>
                        We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                    </Typography>
                    <Typography className={classNames(globalStyles.introDescription, display.mt1,text.rem9)}>
                        Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                    </Typography>
                    <Typography className={classNames(globalStyles.introDescription, display.mt1, text.rem9)}>
                        We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                    </Typography>
                </div>
                <Hidden mdDown>
                    <div className={classNames(bg.cover, bg.center, bg.noRepeat, globalStyles.introIllustration,
                        classes.ourHeritageIllustration)}></div>
                </Hidden>
            </section>
            <section className={classNames(globalStyles.px, display.flex, display.flexColumn, 
                display.justifyBetween, responsive.mdRow, responsive.mdPl0, responsive.mdPr0, responsive.mdMt3,
                responsive.mdMb3)}>
                <Typography component="h2" variant="h4" className={classNames(classes.leadersTitle, 
                    text.font7, classes.leadersTitle)}>
                    The<br/>Leaders
                </Typography>
                <div className={classNames(classes.leadersGrid, display.mt2, responsive.mdMt0)}>
                    <ProfileCard 
                        image={avatarJake}
                        name="Jake Richards"
                        role="Chief Architect"
                    />
                    <ProfileCard 
                        image={avatarThompson}
                        name="Thompson Smith"
                        role="Head of Finance"
                    />
                    <ProfileCard 
                        image={avatarJackson}
                        name="Jackson Rourke"
                        role="Lead Designer"
                    />
                    <ProfileCard 
                        image={avatarMaria}
                        name="Maria Simpson"
                        role="Senior Architect"
                    />
                </div>
            </section>
        </main>
    );
};

export default AboutPage;