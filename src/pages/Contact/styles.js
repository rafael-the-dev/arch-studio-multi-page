import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/contact/mobile/image-hero.jpg'
import heroTabletImage from '../../assets/images/contact/tablet/image-hero.jpg'
import heroDesktopImage from '../../assets/images/contact/desktop/image-hero.jpg'

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
}));