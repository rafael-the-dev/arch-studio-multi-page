import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import loadable from '@loadable/component';
import { useEffect } from "react";
import AOS from 'aos';

const App = () => {
    const theme = createTheme();

    const Header = loadable(() => import(/* webpackChunkName: "Header" */ '../../components/Header'));
    const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ '../../components/Footer'));
    const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../Home'));
    const PortfolioPage = loadable(() => import(/* webpackChunkName: "PortfolioPage" */ '../Portfolio'));
    const AboutPage = loadable(() => import(/* webpackChunkName: "AboutPage" */ '../About'));
    const ContactPage = loadable(() => import(/* webpackChunkName: "ContactPage" */ '../Contact'));

    
    useEffect(() => {
        AOS.init();
    }, [ ]);

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppContextProvider>
                        <Router>
                            <Header />
                            <Routes>
                                <Route exact path="/portfolio" element={<PortfolioPage />} />
                                <Route exact path="/about-us" element={<AboutPage />} />
                                <Route exact path="/contact" element={<ContactPage />} />
                                <Route exact path="/" element={<HomePage />} />
                            </Routes>
                            <Footer />
                        </Router>
                    </AppContextProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;