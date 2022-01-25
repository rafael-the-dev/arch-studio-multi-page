import classNames from 'classnames';
import { useBackground, useDisplay, useGlobalStyles, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import { TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Contact = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const globalStyles = useGlobalStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <main className={classNames(globalStyles.main)}>
            <section className={classNames(display.flex, display.flexColumn, responsive.mdRow,
                responsive.mdAlignEnd, display.relative, globalStyles.hero)}>
                <div className={classNames(bg.center, bg.cover, bg.noRepeat, globalStyles.heroImageContainer,
                    classes.hero)}></div>
                <div className={classNames(display.pb2, display.pt2, globalStyles.px, globalStyles.heroContent,
                    classes.heroContent)}>
                    <Typography component="h1" variant="h4" className={classNames(text.font7, 
                        globalStyles.heroContentTitle)}>
                        Tell us about<br/>your project
                    </Typography>
                    <Typography className={classNames(display.mt1, text.rem9, globalStyles.heroContentDescription)}>
                        We’d love to hear more about your project. Please, leave a message below or 
                        give us a call. We have two offices, one in Texas and one in Tennessee. 
                        If you find yourself nearby, come say hello!
                    </Typography>
                </div>
            </section>
            <div className={classNames(classes.map, display.mb3)}></div>
            <div className={classNames(globalStyles.px, display.mb3, display.pb3, responsive.mdMt3,
                responsive.mdPl0, responsive.mdPr0)}>
                <form>
                    <fieldset className={classNames(display.flex, display.flexColumn, display.justifyBetween,
                        responsive.mdRow)}>
                        <Typography component="fieldset" variant="h4" className={classNames(classes.leadersTitle, 
                            text.font7, classes.leadersTitle)}>
                            Connect<br/>with us
                        </Typography>
                        <div className={classNames(display.mt2, responsive.mdMt0)}>
                            <TextField 
                                classes={{ root: classNames(classes.textFieldRoot)}}
                                className={classNames(display.mb1)}
                                fullWidth
                                label="Name" 
                                variant="standard" 
                            />
                            <TextField 
                                classes={{ root: classNames(classes.textFieldRoot)}}
                                className={classNames(display.mb1)}
                                fullWidth
                                label="Email" 
                                variant="standard" 
                            />
                            <TextField 
                                classes={{ root: classNames(classes.textFieldRoot)}}
                                className={classNames()}
                                fullWidth
                                label="Message" 
                                multiline
                                maxRows={6}
                                rows={3}
                                variant="standard" 
                            />
                            <button className={classNames(display.borderNone, display.outlineNone, 
                                display.block, classes.formButton)}>
                                <ArrowForwardIcon className={classNames(text.textLight)} />
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
    );
};

export default Contact;