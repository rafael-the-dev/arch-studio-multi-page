import classNames from 'classnames';
import { useBackground, useDisplay, useGlobalStyles, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import { Button, TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useForm, Controller  } from "react-hook-form";
import { useCallback, useMemo, useState } from 'react';
import Mailcheck from "../../assets/js/mailcheck";

const Contact = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const globalStyles = useGlobalStyles();
    const responsive = useResponsive();
    const text = useTypography();

    const [ emailSuggestions, setEmailSuggestions ] = useState('');

    const { register, handleSubmit, formState: { errors }, reset, setError, control, setValue, clearErrors } = useForm({  mode: 'onBlur', 
        reValidateMode: 'onBlur', shouldUnregister: false });

    const handler = func => func();

    const onSubmit = event => {
        event.preventDefault();
        if(!emailSuggestions) {
            handler(handleSubmit(data => {
                console.log(data)
                reset();
            }));
        }
    };

    const requiredMessage = useMemo(() => 'This field is required', []);

    const getEmailHelperText = type => {
        let helperText = '';

        if(type === 'required') {
            helperText = requiredMessage;
        } else if(type === 'pattern') {
            helperText = 'Invalid email address';
        }

        return helperText;
    };

    const checkEmail = useCallback(event => {
        const value = event.target.value;
        if(value) {
            clearErrors('email');
            let emailSuggestion = '';
            const domains = ['gmail.com', 'aol.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com', 'msn.com'];
            const topLevelDomains = ["com", "net", "org"];
            const emailPattern = new RegExp('[a-zA-z0-9]{2,30}@[a-zA-z]{3,15}.com?(.[a-z]{2})?', 'i') ;
            
            Mailcheck.run({
                email: value,
                domains: domains,                       // optional
                topLevelDomains: topLevelDomains,       // optional
                //secondLevelDomains: secondLevelDomains, // optional
                suggested: function(suggestion) {
                    emailSuggestion = suggestion.full;
                }
            });
            if((!emailSuggestion) && (emailPattern.test(value))) {
                clearErrors('email');
                setEmailSuggestions(e => '');
            } else {
                setError('email', { type: 'pattern', message: 'Invalid email address'});
                setEmailSuggestions(e => emailSuggestion);
            }
        } else {
            setError('email', { type: 'required', message: requiredMessage })
        }
    }, [  setError, clearErrors, requiredMessage ]);

    const labelClickHandler = useCallback(async() => {
        setValue('email', emailSuggestions);
        clearErrors('email');
        setEmailSuggestions(e => '');
    }, [ setValue, clearErrors, setEmailSuggestions, emailSuggestions ]);

    const suggestionLabelMemo = useMemo(() => (
        <label 
            className={classNames(display.block, classes.emailSuggestion, display.w100)}  
            onClick={labelClickHandler}>
            Do you mean <em className={classNames(classes.emailSuggestionHighlight)}>{emailSuggestions}</em>
        </label>
    ), [ display, classes, emailSuggestions, labelClickHandler]);


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
            <section className={classNames(display.flex, display.flexColumn, display.justifyBetween,
                globalStyles.px, display.pb3, display.mb2, responsive.mdRow, responsive.mdMt3, responsive.mdPt2,
                responsive.mdPl0, responsive.mdPr0)}>
                <Typography component="h2" variant="h4" className={classNames( 
                    text.font7, classes.leadersTitle)}>
                    Connect with us
                </Typography>
                <div className={classNames(display.flex, display.flexColumn, display.mt2, responsive.mdRow,
                    responsive.mdMt0)}>
                    <article className={classNames(responsive.mdMr3)}>
                        <Typography component="h3" variant="h5" className={classNames(classes.lightDarkText,)}>
                            Main Office
                        </Typography>
                        <div className={classNames(display.flex, display.flexColumn, display.justifyBetween,
                            responsive.smRow, responsive.smAlignCenter, responsive.mdColumn, display.alignStart,
                            responsive.mdAlignStart)}>
                            <Typography component="address"  className={classNames(classes.lightDarkText, text.rem9, 
                                display.mt1, classes.address)}>
                                Mail :	archone@mail.com<br/>Address :	1892  Chenoweth Drive TN<br/>Phone :	123-456-3451
                            </Typography>
                            <Button
                                className={classNames(text.textDark, display.pl0)}  
                                endIcon={<ArrowForwardIcon />}>
                                View on map
                            </Button>
                        </div>
                    </article>
                    <article className={classNames(display.mt1, responsive.mdMt0, responsive.mdMl3)}>
                        <Typography component="h3" variant="h5" className={classNames(classes.lightDarkText,)}>
                            Office II
                        </Typography>
                        <div className={classNames(display.flex, display.flexColumn, display.justifyBetween,
                            responsive.smRow, responsive.smAlignCenter, responsive.mdColumn, display.alignStart,
                            responsive.mdAlignStart)}>
                            <Typography component="address"  className={classNames(classes.lightDarkText, text.rem9,
                                display.mt1, classes.address)}>
                                Mail :	archtwo@mail.com<br/>Address :	3399  Wines Lane TX<br/>Phone :	832-123-4321
                            </Typography>
                            <Button
                                className={classNames(text.textDark, display.pl0)}  
                                endIcon={<ArrowForwardIcon />}>
                                View on map
                            </Button>
                        </div>
                    </article>
                </div>
            </section>
            <div className={classNames(classes.map, display.mb3)}></div>
            <div className={classNames(globalStyles.px, display.mb3, display.pb3, responsive.mdMt3,
                responsive.mdPl0, responsive.mdPr0)}>
                <form  onSubmit={onSubmit} autoComplete="off" >
                    <fieldset className={classNames(display.flex, display.flexColumn, display.justifyBetween,
                        responsive.mdRow)}>
                        <Typography component="legend" variant="h4" className={classNames(classes.leadersTitle, 
                            text.font7, classes.leadersTitle)}>
                            Connect<br/>with us
                        </Typography>
                        <div className={classNames(display.mt2, responsive.mdMt0)}>
                        <Controller
                            control={control} 
                            name="name"
                            defaultValue=""
                            rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField 
                                        classes={{ root: classNames(classes.textFieldRoot)}}
                                        className={classNames(display.mb1)}
                                        fullWidth
                                        label="Name" 
                                        variant="standard" 
                                        error={errors.name?.type === 'required'}
                                        helperText={errors.name?.type === 'required' ? requiredMessage : ''}
                                        { ...field }
                                    />
                                )}
                            />
                            <Controller
                                control={control} 
                                name="email"
                                defaultValue=""
                                rules={{ required: true, pattern: /[a-zA-z0-9]{2,30}@[a-zA-z]{3,15}\.com?(\.[a-z]{2})?/ }}
                                render={({ field }) => ( //{ ... register('email', { required: true }) }
                                    <TextField 
                                        type="email"
                                        label="Email"
                                        fullWidth
                                        variant="standard"
                                        classes={{ root: classNames(classes.textFieldRoot)}}
                                        className={classNames(display.mb1)}
                                        error={getEmailHelperText(errors.email?.type) ? true : false}
                                        helperText={getEmailHelperText(errors.email?.type)}
                                        { ...field }
                                        onBlur={checkEmail}
                                    />
                                )}
                            />
                            { emailSuggestions ? suggestionLabelMemo : '' }
                            <Controller
                                control={control} 
                                name="message"
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField 
                                        classes={{ root: classNames(classes.textFieldRoot)}}
                                        className={classNames()}
                                        fullWidth
                                        label="Message" 
                                        multiline
                                        rows={3}
                                        variant="standard" 
                                        error={errors.message?.type === 'required'}
                                        helperText={errors.message?.type === 'required' ? requiredMessage : ''}
                                        { ...field }
                                    />
                                )}
                            />
                            <button type="submit" className={classNames(display.borderNone, display.outlineNone, 
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