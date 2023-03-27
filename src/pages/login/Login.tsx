import React from 'react';
import Logo from '../../components/logo/LendLogo'
import LoginForm from '../../components/LoginForm/LoginForm';
import loginIllustration from '../../assets/images/login_illustration.svg'
import './login.scss'
type Props = {}

const login = (props: Props) => {
  return (
    <section className="login">
      <div className='login_container'>
        <div className="login_image">
          <div className="logo_box">
            <Logo />
          </div>
          <div className="illustration_box">
              <img src={loginIllustration} alt="Login illustration" />
          </div>
        </div>
        <div className="login_form">
          <div className="logo_box">
            <Logo />
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export default login