import React from 'react'
import { Cart } from './CartAndUser/Cart/Cart'
import { User } from './CartAndUser/User/User'
import { Logo } from './Logo/Logo'
import { NavBar } from './NavBar/NavBar'

export const Header = () => {
  return (
    <>
        <Logo />
        <NavBar />
        <div className='CartAndUserContainer'>
            <Cart />
            <User />
        </div>
    </>
  )
}
