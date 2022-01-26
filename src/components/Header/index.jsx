import { Drawer, Hidden, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import logo from '../../assets/images/logo.svg';
import { useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import { useCallback, useState } from 'react';

const Header = () => {
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    const [ openMenu, setOpenMenu ] = useState(false);

    const listItemClickHandler = useCallback(() => setOpenMenu(false), []);

    const getList = useCallback(() => (
        <>
            <li onClick={listItemClickHandler} className={classNames(classes.headerListItem)}>
                <Link to="/portfolio" className={classNames(text.noUnderline, text.uppercase)}>
                    Portfolio
                </Link>
            </li>
            <li onClick={listItemClickHandler} className={classNames(classes.headerListItem)}>
                <Link to="/about-us" className={classNames(text.noUnderline, text.uppercase)}>
                    About us
                </Link>
            </li>
            <li onClick={listItemClickHandler} className={classNames(classes.headerListItem)}>
                <Link to="/contact" className={classNames(text.noUnderline, text.uppercase)}>
                    Contact
                </Link>
            </li>
        </>
    ), [ classes, listItemClickHandler, text ]);

    return (
        <header className={classNames(classes.header, display.px, display.flex, display.alignCenter, display.justifyBetween,
            responsive.smJustifyStart)}>
            <div className={classNames(display.alignCenter, display.flex, display.justifyBetween, display.w100, responsive.smWAuto)}>
                <Link to="/" className={classNames(classes.logoContainer)}>
                    <img 
                        src={logo} 
                        alt="logo" 
                        className={classNames(display.block, display.h100, display.w100)} 
                    />
                </Link>
                <Hidden smUp>
                    <IconButton onClick={() => setOpenMenu(b => !b)}>
                        { openMenu ? <CloseIcon /> : <MenuIcon /> }
                    </IconButton>
                </Hidden>
            </div>
            <Hidden smDown>
                <nav className={classNames(responsive.smMl3)}>
                    <ul 
                        className={classNames(classes.headerNavList, display.flex, display.alignCenter)}>
                        { getList() }
                    </ul>
                </nav>
            </Hidden>
            <Hidden smUp>
                <Drawer
                    anchor="right"
                    open={openMenu}
                    classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
                    onClose={() => setOpenMenu(false)}
                    >
                    <ul 
                        className={classNames(classes.headerList, display.flex, display.flexColumn)}>
                        { getList() }
                    </ul>
                </Drawer>
            </Hidden>
        </header>
    );
};

export default Header;