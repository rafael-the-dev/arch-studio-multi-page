import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/about/mobile/image-hero.jpg'

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))'
export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `${linearGradient}, url(${heroImage})`
    }
}));