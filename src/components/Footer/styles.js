import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#EEEFF4'
    },
    logoContainer: {
        backgroundColor: '#000',
        padding: '2rem .7rem',
        transform: 'translate(0, -50%)'
    },
    logo: {
        filter: 'invert(1)'
    },
    footerListLink: {
        color: '#7D828F',
        fontSize: '1.15rem'
    },
    footerButton: {
        backgroundColor: '#1B1D23 !important',
        padding: '14px 2rem !important',
        textTransform: 'capitalize !important'
    },
}));