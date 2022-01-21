import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#EEEFF4',
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '10%',
            width: '70%'
        }
    },
    logoContainer: {
        backgroundColor: '#000',
        padding: '2rem .7rem',
        transform: 'translate(0, -50%)',
        [theme.breakpoints.up('sm')]: {
            transform: 'translate(0, 0)',
        }
    },
    logo: {
        filter: 'invert(1)'
    },
    footerListLink: {
        color: '#7D828F',
        fontSize: '1.15rem'
    },
    footerPortfolioLink: {
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            right: 0,
            transform: 'translate(50%, 0)'
        }
    },
    footerButton: {
        backgroundColor: '#1B1D23 !important',
        padding: '14px 2rem !important',
        textTransform: 'capitalize !important'
    },
}));