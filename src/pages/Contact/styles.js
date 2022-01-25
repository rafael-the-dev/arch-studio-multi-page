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
    map: {
        backgroundImage: `url(${mapImage})`,
        height: 350,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${mapTabletImage})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${mapDesktopImage})`,
            height: 420,
        }
    }
}));