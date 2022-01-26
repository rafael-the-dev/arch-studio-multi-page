import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import classNames from 'classnames';
import logo from '../../assets/images/logo.svg';
import { useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <footer className={classNames(display.alignCenter, display.flex, display.flexColumn, classes.footer,
            display.pb2, responsive.smRow, responsive.smPb0, display.relative)}>
            <Link to="/" className={classNames(classes.logoContainer)}>
                <img 
                    src={logo} 
                    alt="logo" 
                    className={classNames(display.block, display.h100, display.w100, classes.logo)} 
                />
            </Link>
            <ul className={classNames(display.alignCenter, display.flex, display.flexColumn, responsive.smRow,
                responsive.smMl2)}>
                <li  className={classNames(classes.headerListItem, display.mb2, responsive.smMb0)}>
                    <Link to="/portfolio" className={classNames(text.noUnderline, classes.footerListLink)}>
                        Portfolio
                    </Link>
                </li>
                <li  className={classNames(classes.headerListItem, display.mb2, responsive.smMb0, responsive.smMl1)}>
                    <Link to="/about-us" className={classNames(text.noUnderline, classes.footerListLink)}>
                        About us
                    </Link>
                </li>
                <li  className={classNames(classes.headerListItem, responsive.smMl1)}>
                    <Link to="/contact" className={classNames(text.noUnderline, classes.footerListLink)}>
                        Contact
                    </Link>
                </li>
            </ul>
            <Link to="/portfolio" className={classNames(display.mt2, text.noUnderline, responsive.smMt0, classes.footerPortfolioLink)}>
                <Button
                    variant="contained"
                    className={classNames(text.textLight, classes.footerButton)}
                    endIcon={<ArrowForwardIcon />}
                >
                    See our portfolio
                </Button>
            </Link>
        </footer>
    )
};

export default Footer;