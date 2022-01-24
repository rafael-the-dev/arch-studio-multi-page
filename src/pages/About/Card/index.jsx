import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import classNames from 'classnames';
import { useBackground, useDisplay, useGlobalStyles, useResponsive, useTypography } from '../../../styles';

const ProfileCard = ({ image, name, role }) => {
    const text = useTypography();

    return (
        <Card component="article">
            <CardMedia
                component="img"
                image={ image }
                alt={ name }
            />
            <CardContent>
                <Typography component="h3" variant="h5" className={classNames(text.font7)}>
                    { name }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { role }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="linkedin">
                    <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="twitter">
                    <TwitterIcon />
                </IconButton>
            </CardActions>
      </Card>
    );
};

export default ProfileCard;