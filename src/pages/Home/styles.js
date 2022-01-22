import { makeStyles } from "@mui/styles";
import paramourImage from '../../assets/images/home/mobile/image-hero-paramour.jpg'
const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1))'
export const useStyles = makeStyles(theme => ({
    px: {
        paddingLeft: '5%',
        paddingRight: '5%',
        [theme.breakpoints.up(1000)]: {
            paddingLeft: '10%',
            paddingRight: '10%',
        }
    },
    hero: {
        height: 500
    },
    paramourHero: {
        backgroundImage: `${linearGradient}, url(${paramourImage})`
    },
    heroButton: {
        backgroundColor: '#000 !important',
        padding: '10px 16px !important',
        textTransform: 'capitalize !important'
    }
}));