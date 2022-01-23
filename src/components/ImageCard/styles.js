import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    imageContainer: {
        height: 250,
        [theme.breakpoints.up('sm')]: {
            height: 270,
        },
        [theme.breakpoints.up('md')]: {
            height: 450,
        }
    },
    index: {
        '&::before': {
            color: '#FFF',
            fontSize: '10rem',
            fontWeight: 700,
            opacity: .5,
            position: 'absolute',
            right: 16,
            top: 84,
        }
    },
    first: {
        [theme.breakpoints.up('sm')]: {
            '&::before': {
                content: '"1"'
            }
        },
    },
    second: {
        [theme.breakpoints.up('sm')]: {
            '&::before': {
                content: '"2"'
            }
        },
    },
    third: {
        [theme.breakpoints.up('sm')]: {
            '&::before': {
                content: '"3"'
            }
        },
    },
    date: {
        marginTop: '.6rem'
    }
}));