import React from 'react'
import logoImg from '../../assets/images/logo.svg'
import './lendLogo.scss'

type Props = {}

const LendLogo = (props: Props) => {
  return (
    <div className='logo'>
        <img src={logoImg} alt="Lendsqr" />
    </div>
  )
}

export default LendLogo