import { Button, Hidden, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useCallback, useEffect, useRef } from 'react'

const Home = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    const CarouselItem = useCallback(({ title, description, heroClassName }) => (
        <section className={classNames(display.flex, display.flexColumn, classes.px, classes.hero, 
            heroClassName, bg.center, bg.noRepeat, bg.cover, display.justifyCenter, display.alignStart)}>
            <Typography component="h1" variant="h3" className={classNames(text.font7, text.textLight, text.alignLeft)}>
                { title }
            </Typography>
            <Typography  className={classNames(display.mt1, text.textLight, text.rem9, classes.heroDescription, text.alignLeft)}>
                { description }
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
    ), [ bg, classes, display, text ]);
    
    const indicatorRender = useCallback((func, isSelected, item) => {
        return (
            <button 
                onClick={func} 
                className={classNames(display.borderNone, display.outlineNone, classes.carouselButton, 
                {[classes.selectedIndicator]: isSelected, [text.textLight]: isSelected})}>
                { item + 1}
            </button>
        );
    }, [ classes, display, text ]);


    return (
        <main className={classNames(classes.main)}>
            <div className={classNames(display.relative)}>
                <Carousel 
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false} 
                    showIndicators={true} 
                    showThumbs={false}
                    renderIndicator={indicatorRender}>
                    <CarouselItem 
                        title={<>Project<br/>paramour</>} 
                        description="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture." 
                        heroClassName={classes.paramourHero}
                    />
                    <CarouselItem
                        description="A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
                        heroClassName={classes.federalTowerHero}
                        title={<>Federal II<br/>Tower</>} 
                    />
                    <CarouselItem
                        description="The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
                        heroClassName={classes.seraphStationHero}
                        title={<>Seraph<br/>Station</>} 
                    />
                    <CarouselItem
                        description="Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
                        heroClassName={classes.bankTowerHero}
                        title={<>Trinity Bank<br/>Tower</>} 
                    />
                </Carousel>
            </div>
            <section className={classNames(classes.px, display.pb3, display.pt3, display.mt2)}>
                <div>
                    <Hidden smUp>
                        <Typography component="h2" variant="h4" className={classNames(classes.introTitleBar, text.font7)}>
                            Welcome to<br />Arch Studio
                        </Typography>
                    </Hidden>
                    <Typography className={classNames(classes.introDescription, display.mt2, text.rem9)}>
                        We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                    </Typography>
                    <Typography className={classNames(classes.introDescription, display.mt1,text.rem9)}>
                        Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                    </Typography>
                    <Typography className={classNames(classes.introDescription, display.mt1, text.rem9)}>
                        We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                    </Typography>
                </div>
            </section>
        </main>
    )
};

export default Home;