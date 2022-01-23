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
    }
}));