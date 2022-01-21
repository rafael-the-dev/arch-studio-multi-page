import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    header: {
        padding: '.8rem 3%',
        [theme.breakpoints.up('sm')]: {
            padding: '1.55rem 5%'
        },
        [theme.breakpoints.up('md')]: {
            padding: '1.55rem 8%'
        },
        [theme.breakpoints.up('lg')]: {
            padding: '1.55rem 10%'
        }
    },
    logoContainer: {
        height: 25
    },
    headerList: {
        listStyleType: 'none',
        padding: '1.8rem 0',
        '& li:hover': {
            backgroundColor: '#ebebeb45',
            cursor: 'pointer'
        },
        '& a': {
            color: '#FFF'
        }
    },
    headerListItem: {
        padding: '.7rem 24px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '.83rem',
            marginRight: '1.5rem',
            padding: '.3rem 0',
            '&:last-child': {
                marginRight: 0
            },
            '& a': {
                color: '#333136',
                transition: 'all 1s ease-in-out',
                '&:hover': {
                    textDecoration: 'underline',
                }
            }
        }
    },
    headerNavList: {

    },
    drawerRoot: {
        top: '64px !important',
        '& .MuiBackdrop-root': {
            top: '64px !important'
        }
    },
    drawerPaper: {
        backgroundColor: '#000 !important',
        top: '64px !important'
    },
}));