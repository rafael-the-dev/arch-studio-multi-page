import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/contact/mobile/image-hero.jpg'
import mapImage from '../../assets/images/contact/mobile/image-map.png'

import heroTabletImage from '../../assets/images/contact/tablet/image-hero.jpg'
import mapTabletImage from '../../assets/images/contact/tablet/image-map.png'

import heroDesktopImage from '../../assets/images/contact/desktop/image-hero.jpg'
import mapDesktopImage from '../../assets/images/contact/desktop/image-map.png'

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))'
export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `url(${heroImage})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${heroTabletImage})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradient}, url(${heroDesktopImage})`,
        }
    },
    heroContent: {
        [theme.breakpoints.up('sm')]: {
            '&::before': {
                content: '"Contact"'
            }
        },
    },
    locations: {
        [theme.breakpoints.up('sm')]: {
            transform: 'translateY(-65%)'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '6rem !important',
            transform: 'translateY(0)'
        },
    },
    lightDarkText: {
        color: '#60636D'
    },
    address: {
        lineHeight: '1.7rem !important'
    },
    map: {
        backgroundImage: `url(${mapImage})`,
        height: 350,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${mapTabletImage})`,
            transform: 'translateY(-58%)'
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${mapDesktopImage})`,
            height: 420,
            transform: 'translateY(0)'
        }
    },
    formContainer: {
        [theme.breakpoints.up('sm')]: {
            transform: 'translateY(-13%)'
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '5rem !important',
            transform: 'translateY(0)'
        },
    },
    textFieldRoot: {
        '& label': {
            color: '#C8CCD8 !important'
        }
    },
    formButton: {
        backgroundColor: '#000',
        padding: '.6rem .9rem',
        marginLeft: 'auto !important'
    },
    emailSuggestion: {
        color: 'red',
        marginLeft: 3
    },
    emailSuggestionHighlight: {
        color: '#000',
        textDecoration: 'underline'
    }
}));