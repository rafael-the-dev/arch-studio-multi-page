import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    imageContainer: {
        [theme.breakpoints.up('md')]: {
            cursor: 'pointer',
            '&:hover .cardsActions': {
                height: '100%',
                left: 0,
                transform: 'scale(1)',
                top: 0,
                width: '100%'
            }
        }
    },
    cardActions: {
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'rgb(0 0 0 / 54%)',
            display: 'flex',
            height: 0,
            left: '50%',
            padding: '0 !important',
            position: 'absolute',
            transition: 'all 2s ease-in-out',
            transform: 'scale(0)',
            top: '50%',
            width: 0
        }
    },
    cardActionsDisplay: {
        height: '100%',
        left: 0,
        transform: 'scale(1)',
        top: 0,
        width: '100%'

    },
    cardActionsIcon: {
        [theme.breakpoints.up('md')]: {
            color: '#FFF !important'
        }
    }
}));