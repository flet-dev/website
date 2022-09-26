import React, { useEffect, useRef, useState } from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import styles from './styles.module.css';

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
            <BrowserOnly fallback={<div>Loading...</div>}>
                {() => {
                    if (token) {
                        // signup submitted
                        return <div>谢谢您！您将很快收到确认邮件。</div>
                    } else if (window.location.href.endsWith('?signup-confirmed')) {
                        // signup confirmed
                        return <div><span style={{ fontSize: '25px', marginRight: '10px' }}>🎉</span>恭喜！您已成功订阅Flet新闻。</div>
                    } else {
                        // signup form
                        return <form onSubmit={onSubmit}>
                            <h3>订阅Flet新闻以获取项目进展和指南！</h3>
                            <input
                                type="email"
                                value={email}
                                placeholder="您的电子邮件地址"
                                onChange={(evt) => setEmail(evt.target.value)}
                            />
                            <input type="submit" value="提交" />
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
