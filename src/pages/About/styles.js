import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/about/mobile/image-hero.jpg'
import heroTabletImage from '../../assets/images/about/tablet/image-hero.jpg'
import heroDesktopImage from '../../assets/images/about/desktop/image-hero.jpg'
import ourHeritageDesktopImage from '../../assets/images/about/desktop/image-heritage.jpg'

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))'
export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `${linearGradient}, url(${heroImage})`,
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
                content: '"About"'
            }
        },
    },
    ourHeritageIllustration: {
        backgroundImage: `url(${ourHeritageDesktopImage})`
    },
    leadersGrid: {
        display: 'grid',
        gridRowGap: 30,
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto auto auto auto'
    }
}));