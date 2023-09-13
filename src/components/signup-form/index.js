import React, { useEffect, useRef, useState } from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import styles from './styles.module.css'
import Translate, { translate } from '@docusaurus/Translate'

export default function SignupForm() {
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState('')
  const captchaRef = useRef(null)

  const onSubmit = event => {
    event.preventDefault()
    captchaRef.current.execute()
  }

  const onExpire = () => {
    console.log('hCaptcha Token Expired')
  }

  const onError = err => {
    console.log(`hCaptcha Error: ${err}`)
  }

  useEffect(async () => {
    if (token) {
      var data = {
        email: email,
        captchaToken: token,
      }

      // send message
      const response = await fetch('/api/email-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const results = await response.json()
      console.log(`Results:`, results)
    }
  }, [token, email])

  return (
    <div id='signup' className={styles.signupForm}>
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          if (token) {
            // signup submitted
            return (
              <div>
                <Translate
                  id='indexPage.text.sendEmailTip'
                  description='Send email notification description'>
                  Thank you! You will receive the confirmation email shortly.
                </Translate>
              </div>
            )
          } else if (window.location.href.endsWith('?signup-confirmed')) {
            // signup confirmed
            return (
              <div>
                <span style={{ fontSize: '25px', marginRight: '10px' }}>
                  🎉
                </span>
                <Translate
                  id='indexPage.text.subscribedTip'
                  description='Subscription success notification description'>
                  Congratulations! You have successfully subscribed to Flet
                  newsletter.
                </Translate>
              </div>
            )
          } else {
            // signup form
            return (
              <form onSubmit={onSubmit}>
                <h3>
                  <Translate
                    id='indexPage.text.subscribedSuccessTip'
                    description='Get update notification success description'>
                    Subscribe to Flet newsletter for project updates and
                    tutorials!
                  </Translate>
                </h3>
                <input
                  type='email'
                  value={email}
                  placeholder={translate({
                    id: 'indexPage.input.emailPlaceholder',
                    message: 'Your email address',
                    description: 'Email placeholder text description',
                  })}
                  onChange={evt => setEmail(evt.target.value)}
                />
                <input
                  type='submit'
                  value={translate({
                    id: 'indexPage.input.submit',
                    message: 'Submit',
                    description: 'Submit button text description',
                  })}
                />
                <HCaptcha
                  sitekey='db49a301-288d-491b-9746-ebd3354dc5ff'
                  size='invisible'
                  onVerify={setToken}
                  onError={onError}
                  onExpire={onExpire}
                  ref={captchaRef}
                />
              </form>
            )
          }
        }}
      </BrowserOnly>
    </div>
  )
}
