import { Hidden, ImageListItem, ImageListItemBar } from '@mui/material';
import classNames from 'classnames';
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'

const ImageCard = ({ desktopImage, date, index, mobileImage, tabletImage, title }) => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();

    const indexs = useRef([ classes.first, classes.second, classes.third ]);

    return (
        <ImageListItem >
            <div className={classNames(classes.imageContainer, display.w100, display.relative,
                 Boolean(index) ? classNames(indexs.current[index - 1], classes.index) : '')}>
                <Hidden smUp>
                    <img
                        src={mobileImage}
                        alt={title}
                        loading="lazy"
                        className={classNames(display.block, display.h100, display.w100)}
                    />
                </Hidden>
                <Hidden smDown mdUp>
                    <img
                        src={tabletImage}
                        alt={title}
                        loading="lazy"
                        className={classNames(display.block, display.h100, display.w100)}
                    />
                </Hidden>
                <Hidden mdDown>
                    <img
                        src={desktopImage}
                        alt={title}
                        loading="lazy"
                        className={classNames(display.block, display.h100, display.w100)}
                    />
                </Hidden>
            </div>
            <ImageListItemBar
                title={title}
                subtitle={date ? <time className={classNames(classes.date, display.block)}>{ date }</time> : (
                    <Link to="/projects" className={classNames(text.noUnderline, text.textLight)}>
                        View all Projects</Link>
                )}
          />
        </ImageListItem>
    );
};

export default ImageCard;