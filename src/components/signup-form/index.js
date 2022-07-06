import React, { useEffect, useRef, useState } from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

export default function SignupForm() {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const captchaRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        captchaRef.current.execute();
    };

    const onExpire = () => {
        console.log("hCaptcha Token Expired");
    };

    const onError = (err) => {
        console.log(`hCaptcha Error: ${err}`);
    };

    useEffect(async () => {
        if (token) {
            var data = {
                email: email,
                captchaToken: token
            };

            // send message
            const response = await fetch("/api/email-signup", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const results = await response.json();
            console.log(`Results:`, results);
        }
    }, [token, email]);

    return (
        <div id="signup" className={styles.signupForm}>
            <BrowserOnly fallback={<div><Translate>Loading...</Translate></div>}>
                {() => {
                    if (token) {
                        // signup submitted
                        return <div><Translate>Thank you! You will receive the confirmation email shortly.</Translate></div>
                    } else if (window.location.href.endsWith('?signup-confirmed')) {
                        // signup confirmed
                        return <div><span style={{ fontSize: '25px', marginRight: '10px' }}>🎉</span><Translate>Congratulations! You have successfully subscribed to Flet newsletter.</Translate></div>
                    } else {
                        // signup form
                        return <form onSubmit={onSubmit}>
                            <h3><Translate id="homepage.Subscribe">{'Subscribe to Flet newsletter for project updates and tutorials!'}</Translate></h3>
                            <input
                                type="email"
                                value={email}
                                placeholder={
                                    translate({
                                      message: "Your email address",
                                    })
                                  }
                                onChange={(evt) => setEmail(evt.target.value)}
                            />
                            <input type="submit" value={
                                    translate({
                                      message: "Submit",
                                    })
                                  } />
                            <HCaptcha
                                sitekey="db49a301-288d-491b-9746-ebd3354dc5ff"
                                size="invisible"
                                onVerify={setToken}
                                onError={onError}
                                onExpire={onExpire}
                                ref={captchaRef}
                            />
                        </form>
                    }
                }}
            </BrowserOnly>
        </div>
    );
}
