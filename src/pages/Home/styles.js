import { makeStyles } from "@mui/styles";
import paramourImage from '../../assets/images/home/mobile/image-hero-paramour.jpg'
import federalImage from '../../assets/images/home/mobile/image-hero-federal.jpg'
import seraphImage from '../../assets/images/home/mobile/image-hero-seraph.jpg'
import trinityImage from '../../assets/images/home/mobile/image-hero-trinity.jpg'
import smallTeam from '../../assets/images/home/mobile/image-small-team.jpg'

import paramourTabletImage from '../../assets/images/home/tablet/image-hero-paramour.jpg'
import federalTabletImage from '../../assets/images/home/tablet/image-hero-federal.jpg'
import seraphTabletImage from '../../assets/images/home/tablet/image-hero-seraph.jpg'
import trinityTabletImage from '../../assets/images/home/tablet/image-hero-trinity.jpg'
import smallTeamTabletImage from '../../assets/images/home/tablet/image-small-team.jpg'

import paramourDesktopImage from '../../assets/images/home/desktop/image-hero-paramour.jpg'
import federalDesktopImage from '../../assets/images/home/desktop/image-hero-federal.jpg'
import seraphDesktopImage from '../../assets/images/home/desktop/image-hero-seraph.jpg'
import trinityDesktopImage from '../../assets/images/home/desktop/image-hero-trinity.jpg'
import welcomeDesktopImage from '../../assets/images/home/desktop/image-welcome.jpg'
import smallTeamDesktopImage from '../../assets/images/home/desktop/image-small-team.jpg'

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1))'
const linearGradientDesktop = 'linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1))'
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
            backgroundImage: `${linearGradientDesktop}, url(${paramourDesktopImage})`,
        }
    },
    federalTowerHero: {
        backgroundImage: `${linearGradient}, url(${federalImage})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${federalTabletImage})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradientDesktop}, url(${federalDesktopImage})`,
        }
    },
    seraphStationHero: {
        backgroundImage: `${linearGradient}, url(${seraphImage})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${seraphTabletImage})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradientDesktop}, url(${seraphDesktopImage})`,
        }
    },
    bankTowerHero: {
        backgroundImage: `${linearGradient}, url(${trinityImage})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${trinityTabletImage})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradientDesktop}, url(${trinityDesktopImage})`,
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
    },
    welcomeSection: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            paddingRight: 0
        }
    },
    welcomeContent: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%',
        }
    },
    introTitleBar: {
        '&::before': {
            backgroundColor: '#C8CCD8',
            content: '""',
            display: 'block',
            height: 1,
            marginBottom: '2.4rem',
            width: 90
        },
        [theme.breakpoints.up('sm')]: {
            '&::before': {
                backgroundColor: 'transparent',
                color: '#EEEFF4',
                content: '"Welcome"',
                fontSize: '8rem',
                height: 'auto',
                left: 0,
                letterSpacing: 14,
                position: 'absolute',
                top: -43,
                width: 'auto'
            },
        }
    },
    introDescription: {
        color: '#60636D'
    },
    introIllustration: {
        backgroundImage: `url(${welcomeDesktopImage})`,
        height: 500,
        width: 400
    },
    smallTeamSection: {
        backgroundImage: `${linearGradient}, url(${smallTeam})`,
        height: 400,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${smallTeamTabletImage})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradientDesktop}, url(${smallTeamDesktopImage})`,
            height: 450,
        }
    }
}));