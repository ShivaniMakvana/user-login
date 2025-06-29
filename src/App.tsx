import React from 'react'
import './App.css'
import LoginForm from './components/LoginForm'

type AppProps = {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <div className="container relative d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="w-100 d-flex align-items-start">
          <img
            src="./logo.png"
            alt="aosphere logo"
            className="logo mb-3"
            style={{ maxWidth: '140px', height: 'auto' }}
          />
        </div>
        <LoginForm />
        <div className="text-left mt-4 p-4" style={{ backgroundColor: '#e5e8eb' }}>
          <div className='details w-50'>
            <p>Please login here to access your organisation's subscriptions.</p>
            <p><a className="text-danger text-decoration-none" href='https://www.aosphere.com/privacy-statement/' target='_blank'>Click here</a> to view our Privacy Statement, and <a className="text-danger text-decoration-none" href='https://www.aosphere.com/media/dq5ityew/aosphere-cookies-policy-nov-2024.pdf' target='_blank'>click here</a> to view our Cookies Policy, which includes information on cookies used on this website and how to manage them. By logging in without changing your settings you agree to the use of cookies in accordance with our Privacy Statement and Cookies Policy.</p>
            <p><a className="text-danger text-decoration-none" href='https://www.aosphere.com/media/uzepo4mj/aosphere-legal-notices-nov-2024.pdf' target='_blank'>Click here</a> to review the legal notices in respect of ansphere and <a className="text-danger text-decoration-none" href='https://www.aosphere.com' target='_blank'>www.aosphere.com</a>.</p>
            <p>For further help or support please <a className="text-danger text-decoration-none" href='https://www.aosphere.com/contact' target='_blank'>contact us</a>.</p>
          </div>
        </div>
        <footer className="w-100 d-flex align-items-start flex-column text-muted mt-3 ">
          <p style={{ fontSize: '14px' }}>&copy; aosphere 2025 | <a className="text-muted text-decoration-none link-underline-hover" href='https://www.aosphere.com/privacy-statement/' target='_blank'>Privacy Statement</a> | <a className="text-muted text-decoration-none link-underline-hover" href='https://www.aosphere.com/media/dq5ityew/aosphere-cookies-policy-nov-2024.pdf' target='_blank'>Cookies Policy</a> | <a className="text-muted text-decoration-none link-underline-hover" href='https://www.aosphere.com/media/uzepo4mj/aosphere-legal-notices-nov-2024.pdf' target='_blank'>Legal Notices</a> | <a className="text-muted text-decoration-none link-underline-hover" href='https://www.aosphere.com/media/uiubjnls/aosphere_limited_modern_slavery_-statement.pdf' target='_blank'>Modern Slavery</a></p>
          <p className='details w-50' style={{ fontSize: '13px' }}>aosphere Limited registered in England and Wales with registered number 15371365 and registered office at The Steward Building, 12 Steward Street, London, E1 6FQ, United Kingdom.</p>
        </footer>
      </div>
    </>
  )
}

export default App