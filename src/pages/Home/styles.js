import { makeStyles } from "@mui/styles";
import paramourImage from '../../assets/images/home/mobile/image-hero-paramour.jpg'
import paramourTabletImage from '../../assets/images/home/tablet/image-hero-paramour.jpg'
import paramourDesktopImage from '../../assets/images/home/desktop/image-hero-paramour.jpg'
const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1))'
export const useStyles = makeStyles(theme => ({
    main: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%',
        },
        [theme.breakpoints.up(1000)]: {
            paddingLeft: '10%',
            paddingRight: '10%',
        }
    },
    px: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    hero: {
        height: 500
    },
    paramourHero: {
        backgroundImage: `${linearGradient}, url(${paramourImage})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${paramourTabletImage})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradient}, url(${paramourDesktopImage})`,
        }
    },
    heroDescription: {
        [theme.breakpoints.up(700)]: {
            maxWidth: '60%'
        }
    },
    heroButton: {
        backgroundColor: '#000 !important',
        padding: '10px 16px !important',
        textTransform: 'capitalize !important'
    },
    carouselButtonsContainer: {
        bottom: -10,//20,
        left: -26,
        [theme.breakpoints.up('sm')]: {
            left: -26
        }
    },
    carouselButton: {
        backgroundColor: '#FFF',
        height: 40,
        width: 40
    },
    selectedIndicator: {
        backgroundColor: '#1B1D23 !important'
    }
}));