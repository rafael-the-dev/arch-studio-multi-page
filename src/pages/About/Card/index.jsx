import { Card, CardActions, CardContent, CardMedia, Hidden, IconButton, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import classNames from 'classnames';
import { useBackground, useDisplay, useGlobalStyles, useResponsive, useTypography } from '../../../styles';
import { useStyles } from './styles'
import { useMemo } from 'react';

const ProfileCard = ({ image, name, role }) => {
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive()
    const text = useTypography();

    const cardsActions = useMemo(() => (
        <CardActions disableSpacing className={classNames(classes.cardActions, responsive.mdAlignCenter, 
            responsive.mdJustifyCenter, 'cardsActions')}>
            <IconButton aria-label="linkedin">
                <LinkedInIcon className={classNames(classes.cardActionsIcon)} />
            </IconButton>
            <IconButton aria-label="twitter">
                <TwitterIcon className={classNames(classes.cardActionsIcon)} />
            </IconButton>
        </CardActions>
    ), [ classes, responsive ])

    return (
        <Card elevation={0} component="article">
            <div className={classNames(display.relative, classes.imageContainer)}>
                <CardMedia
                    component="img"
                    image={ image }
                    alt={ name }
                />
                <Hidden mdDown>
                    { cardsActions }
                </Hidden>
            </div>
            <CardContent classes={{ root: classNames(display.pb0)}}>
                <Typography component="h3" variant="h5" className={classNames(text.font7)}>
                    { name }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { role }
                </Typography>
            </CardContent>
            <Hidden mdUp>
                { cardsActions }
            </Hidden>
      </Card>
    );
};

export default ProfileCard;