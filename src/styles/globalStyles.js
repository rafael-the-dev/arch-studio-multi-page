import { makeStyles } from "@mui/styles";

export const useGlobalStyles = makeStyles(theme => ({
    hero: {
        height: 250
    },
    px: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    heroContent: {
        background: '#F2F2F2',
        boxSizing: 'border-box',
        transform: 'translate(0px, -29%)',
        width: '90%'
    },
    heroContentDescription: {
        color: '#60636D'
    }
}));