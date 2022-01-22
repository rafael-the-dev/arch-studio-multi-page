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

    const CarouselItem = useCallback(() => (
        <section className={classNames(display.flex, display.flexColumn, classes.px, classes.hero, 
            classes.paramourHero, bg.center, bg.noRepeat, bg.cover, display.justifyCenter, display.alignStart)}>
            <Typography component="h1" variant="h3" className={classNames(text.font7, text.textLight, text.alignLeft)}>
                Project<br/>paramour
            </Typography>
            <Typography  className={classNames(display.mt1, text.textLight, text.rem9, classes.heroDescription, text.alignLeft)}>
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
    ), [ bg, classes, display, text ]);

    const CustomIndicator = useCallback(() => (

        <div className={classNames(display.flex, classes.carouselButtonsContainer, display.absolute)}>
            <button className={classNames(display.borderNone, display.outlineNone, classes.carouselButton)}>1</button>
            <button className={classNames(display.borderNone, display.outlineNone, classes.carouselButton)}>2</button>
            <button className={classNames(display.borderNone, display.outlineNone, classes.carouselButton)}>3</button>
            <button className={classNames(display.borderNone, display.outlineNone, classes.carouselButton)}>4</button>
        </div>
    ), [ classes, display]);
    
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
                    showArrows={false} 
                    showIndicators={true} 
                    showThumbs={false}
                    renderIndicator={indicatorRender}>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
                {/*<div className={classNames(display.flex, classes.carouselButtonsContainer, display.absolute)}>
                    <button className={classNames(display.borderNone, display.outlineNone, classes.carouselButton)}>1</button>
                    <button className={classNames(display.borderNone, display.outlineNone, classes.carouselButton)}>2</button>
                    <button className={classNames(display.borderNone, display.outlineNone, classes.carouselButton)}>3</button>
                    <button className={classNames(display.borderNone, display.outlineNone, classes.carouselButton)}>4</button>
                </div>*/}
            </div>
        </main>
    )
};

export default Home;