import { Hidden, ImageListItem, ImageListItemBar } from '@mui/material';
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'

const ImageCard = ({ desktopImage, mobileImage, tabletImage, title }) => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();
    return (
        <ImageListItem >
            <div className={classNames(classes.imageContainer, display.w100)}>
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
                subtitle={(
                    <Link to="/projects" className={classNames(text.noUnderline, text.textLight)}>
                        View all Projects</Link>
                )}
          />
        </ImageListItem>
    );
};

export default ImageCard;